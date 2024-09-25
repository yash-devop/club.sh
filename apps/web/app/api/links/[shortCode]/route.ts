import { ClubApiError } from "@/lib/errors";
import prisma from "@club/db/client";
import { NextRequest, NextResponse } from "next/server"


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
            select:{
                url: true,
                title: true,
                description: true,
                image:true
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
        const {url , title ,description , image} = existingShortCode
        return NextResponse.json({
            url,
            title,
            description,
            image
        })
        // return NextResponse.redirect(og_url)
    } catch (error) {
        if (error instanceof ClubApiError) {
            return NextResponse.json({ message: error.message }, { status: error.code });
        }
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });

    }



}
