import { getSessionFn } from "@/lib/auth/getSession";
import { ClubApiError } from "@/lib/errors";
import { getGeoData } from "@/lib/functions/getGeoData";
import { publishClickEvents } from "@/lib/tinybird/publish";
import prisma from "@club/db/client";
import { getUserAgent, LOCALHOST_GEO_DATA, LOCALHOST_IP } from "@club/utils";
import { nanoid } from "nanoid";
import { headers } from "next/headers";
import { NextRequest, NextResponse, userAgent } from "next/server"

export const GET = async (req: NextRequest, {
    params: {
        shortCode
    }
}: {
    params: {
        shortCode: string
    }
}) => {

    try {
        const existingShortCode = await prisma.link.findUnique({
            where: {
                shortCode
            },
            select: {
                id: true,
                url: true,
                title: true,
                description: true,
                image: true
            }
        })
        if (!existingShortCode) {
            console.log('Shortcode nhi mila bhai ;-; ');
            throw new ClubApiError({
                errorName: "not_found",
                code: 404,
                message: "The shorturl not found in database. Please check your URL correctly."
            })
        }

        const session = await getSessionFn()
        if (!session?.user) {
            return new Response("Unauthorized Access. Please login", { status: 401 });
        }
        const { id: urlId, url, title, description, image } = existingShortCode
        console.log('Original URL : ', existingShortCode);

        const { country, region } = process.env.NODE_ENV === "development" ? LOCALHOST_GEO_DATA : await getGeoData("103.111.231.188");
        console.log('User-Agent: ',headers().get("user-agent"));
        const browser = getUserAgent(headers(), "browser");
        const device = getUserAgent(headers(), "device");
        const os = getUserAgent(headers(), "os");
        const referrer = headers().get("referrer") ?? "direct"

        console.log('meta-data in ROUTE: ', {
            country,
            browser,
            device,
            os,
            referrer
        });

        try {
            const published = await publishClickEvents({
                browser,
                device,
                country,
                os,
                referrer,
                url: existingShortCode.url,
                shortCode,
                //@ts-ignore
                user_id: session?.user?.id,
                timestamp: new Date().toISOString(),
                click_id: nanoid(16),
                link_id: urlId
            })
    
            console.log('published :', published);
        } catch (error) {
            console.log('Tinybird error :' ,error);
        }

        return NextResponse.json({
            url,
            title,
            description,
            image
        })
    } catch (error) {
        if (error instanceof ClubApiError) {
            return NextResponse.json({ message: error.message }, { status: error.code });
        }
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });

    }



}   
