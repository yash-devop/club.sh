import { NextRequest, NextResponse } from "next/server"
import { getShortCode } from '@club/utils'

import { CreateLinkProps } from '@/lib/types'
import prisma from "@club/db/client";
import { ClubApiError, PrismaErrorHandler } from "@/lib/errors";
import { getSessionFn } from "@/lib/auth/getSession";
export const POST = async (req: NextRequest, res: NextResponse) => {
    const session = await getSessionFn()
    if (!session?.user) {
        return new Response("Unauthorized Access. Please login", { status: 401 });
    }
    const { url ,shortCode }: CreateLinkProps = await req.json();
    console.log({
        url,
        shortCode
    });
    try {
        if (!url) {
            throw new ClubApiError({
                code: 404,
                errorName: "not_found",
                message: "URL not found !!",
                inputField: {
                    "shortCode": "The Short link Already Exists: Duplicate Key Found !"
                }
            })
        }
        if(!shortCode){
            const truncatedStr = getShortCode(url)
            const existingShortCode = await prisma.link.findUnique({
                where: {
                    shortCode: truncatedStr,            // useful when user has the option of `Add custom id`
                    user: {
                        id: session.user.id
                    }
                }
            })
            console.log('existing : ', existingShortCode);
            if (existingShortCode) {
                throw new ClubApiError({
                    errorName: "conflict",
                    code: 409,
                    message: "The Short link Already Exists: Duplicate Key Found !",
                    inputField: {
                        "shortCode": "The Short link Already Exists: Duplicate Key Found !"
                    }
                })
            }
    
            const newLink = await prisma.link.create({
                data: {
                    url,
                    shortCode: truncatedStr,
                    userId: session.user.id
                },
            })
    
            if (!newLink) {
                throw new ClubApiError({
                    errorName: "conflict",
                    code: 409,
                    message: "The Short link Already Exists: Duplicate Key Found !",
                    inputField: {
                        "shortCode": "The Short link Already Exists: Duplicate Key Found !"
                    }
                })
            }
            return NextResponse.json({
                message: "Shorten Link Created",
                link: newLink
            })
        }
        else {
            const existingShortCode = await prisma.link.findUnique({
                where: {
                    shortCode,            // useful when user has the option of `Add custom id`
                    user: {
                        id: session.user.id
                    }
                }
            })
            console.log('existing : ', existingShortCode);
            if (existingShortCode) {
                throw new ClubApiError({
                    errorName: "conflict",
                    code: 409,
                    message: "The Short link Already Exists: Duplicate Key Found !",
                    inputField: {
                        "shortCode": "The Short link Already Exists: Duplicate Key Found !"
                    }
                })
            }
    
            const newLink = await prisma.link.create({
                data: {
                    url,
                    shortCode,
                    userId: session.user.id,
                },
            })
    
            if (!newLink) {
                throw new ClubApiError({
                    errorName: "conflict",
                    code: 409,
                    message: "ERROR Hai re baba conflict vali",
                    inputField: {
                        "shortCode": "Conflict"
                    }
                })
            }
            return NextResponse.json({
                message: "Shorten Link Created",
                link: newLink
            })
        }


        
    } catch (error) {
        if (error instanceof ClubApiError) {
            return NextResponse.json({ message: error.message , field: error.inputField }, { status: error.code });
        }

        const prismaErrorHandler = new PrismaErrorHandler(error)
        return prismaErrorHandler.handleError()
    }
}