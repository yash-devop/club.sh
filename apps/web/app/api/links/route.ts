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
            orderBy:{
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



export const DELETE=async(req:NextRequest)=>{
    const linkId = req.nextUrl.searchParams.get("linkId")

    console.log('link id:', linkId);

    if(!linkId){
        return NextResponse.json({
            message: "LinkID not found !"
        })
    }

    try {
        const link = await prisma.link.delete({
            where: {
                id: linkId
            }
        })
    
        return NextResponse.json({
            message: `Link ${linkId} deleted successfully.`
        })
    } catch (error) {
        return NextResponse.json({
            message: (error as Error).message
        })
    }
}