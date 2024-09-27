import { getSessionFn } from "@/lib/auth/getSession";
import { ClubApiError, PrismaErrorHandler } from "@/lib/errors";
import prisma from "@club/db/client";
import { NextResponse } from "next/server"

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

