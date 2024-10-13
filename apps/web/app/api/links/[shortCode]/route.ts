import { getSessionFn } from "@/lib/auth/getSession";
import { ClubApiError } from "@/lib/errors";
import { getGeoData } from "@/lib/functions/getGeoData";
import { getIp } from "@/lib/functions/getIp";
import { redis } from "@/lib/redis/redis";
import { publishClickEvents } from "@/lib/tinybird/publish";
import prisma from "@club/db/client";
import { getUserAgent, LOCALHOST_GEO_DATA } from "@club/utils";
import { nanoid } from "nanoid";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, {
    params: {
        shortCode
    }
}: {
    params: {
        shortCode: string
    }
}) => {
    console.log('shortCode: ', shortCode);
    try {
        // Check Redis cache for the metadata
        const cachedData = await redis.get(shortCode);
        
        if (cachedData) {
            console.log('Cache hit:', cachedData);
            return NextResponse.json(JSON.parse(cachedData));
        }

        // Query the database if not found in cache
        const existingShortCode = await prisma.link.findUnique({
            where: { shortCode },
            select: {
                id: true,
                url: true,
                title: true,
                description: true,
                image: true,
                userId: true,
                clicks: true
            }
        });

        if (!existingShortCode) {
            console.log('Shortcode not found');
            throw new ClubApiError({
                errorName: "not_found",
                code: 404,
                message: "The shorturl not found in database. Please check your URL correctly."
            });
        }

        const { id: urlId, url, title, description, image, userId, clicks } = existingShortCode;
        console.log('Original URL:', existingShortCode);

        const ipAddress = getIp(req);
        const { country, region } = process.env.NODE_ENV === "development" ? LOCALHOST_GEO_DATA : await getGeoData(ipAddress);
        const browser = getUserAgent(headers(), "browser");
        const device = getUserAgent(headers(), "device");
        const os = getUserAgent(headers(), "os");
        const referrer = headers().get("referrer") ?? "direct";

        console.log('Meta-data:', { country, browser, device, os, referrer });

        // Update click count in the database
        const updatedShortCode = await prisma.link.update({
            where: { id: urlId },
            data: { clicks: clicks + 1 },
            select: { clicks: true }
        });

        // Get the updated click count
        const updatedClicks = updatedShortCode.clicks;

        try {
            const published = await publishClickEvents({
                browser,
                device,
                country,
                os,
                referrer,
                url: existingShortCode.url,
                shortCode,
                urlClicks: String(updatedClicks),
                user_id: existingShortCode.userId!,
                timestamp: new Date().toISOString(),
                click_id: nanoid(16),
                link_id: urlId
            });
            console.log('Published:', published);
        } catch (error) {
            console.log('Tinybird error:', error);
        }

        // Cache the result in Redis (metadata only)
        await redis.set(shortCode, JSON.stringify(existingShortCode), 'EX', 60 * 30);

        return NextResponse.json({ url, title, description, image });
    } catch (error) {
        if (error instanceof ClubApiError) {
            return NextResponse.json({ message: error.message }, { status: error.code });
        }
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
