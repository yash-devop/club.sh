import { getSessionFn } from "@/lib/auth/getSession";
import { ClubApiError, PrismaErrorHandler } from "@/lib/errors";
import prisma from "@club/db/client";
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
    const session = await getSessionFn()
    if (!session?.user) {
        return new Response("Unauthorized Access. Please login", { status: 401 });
    }
    try {

        const links = await prisma.link.findMany({
            where: {
                user: {
                    id: session.user.id
                }
            },
            select: {
                id: true,
                url: true,
                shortCode: true,
                createdAt: true,
                user: {
                    select: {
                        image: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        })


        if (!links || links.length === 0) {
            throw new ClubApiError({
                errorName: "not_found",
                code: 404,
                message: "No links found for this user account."
            })
        }
        return NextResponse.json(links);
    } catch (error) {
        if (error instanceof ClubApiError) {
            return NextResponse.json({ message: error.message }, { status: error.code });
        }

        const prismaErrorHandler = new PrismaErrorHandler(error)
        return prismaErrorHandler.handleError()
    }

}



export const DELETE = async (req: NextRequest) => {
    const linkId = req.nextUrl.searchParams.get("linkId")

    console.log('link id:', linkId);

    if (!linkId) {
        return NextResponse.json({
            message: "LinkID not found !"
        })
    }

    try {
        // const link = await prisma.link.delete({
        //     where: {
        //         id: linkId
        //     }
        // })
        // if (link) {
        // }
        const deleteCondition = `link_id = ${linkId}`;
        // const deleteCondition = "toDate(date) >= '2019-11-01' and toDate(date) <= '2019-11-30'";
        const response = await fetch("https://api.us-east.aws.tinybird.co/v0/datasources/club_click_events/delete", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.TINYBIRD_API_KEY}`
            },
            body: new URLSearchParams({
                delete_condition: deleteCondition
            })
        })

        const result = await response.json()

        console.log('Delete result from Tiny Bird: ', result);

        return NextResponse.json({
            message: `Link ${linkId} deleted successfully.`
        })
    } catch (error) {
        return NextResponse.json({
            message: (error as Error).message
        })
    }
}