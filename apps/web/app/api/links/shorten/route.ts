import { NextRequest, NextResponse } from "next/server"
import { hashString } from '@club/utils'

import { CreateLinkProps, LinkProps } from '@/lib/types'
import prisma from "@club/db/client";
import {Prisma} from "@club/db/client";
import { ClubApiError, PrismaErrorHandler } from "@/lib/errors";
import { getSessionFn } from "@/lib/auth/getSession";
export const POST = async (req: NextRequest, res: NextResponse) => {
    const session = await getSessionFn()
    if (!session?.user) {
        return new Response("Unauthorized Access. Please login", { status: 401 });
    }
    try {


        const { url }: CreateLinkProps = await req.json();
        const hashedStr = hashString(url)
        const base64Hash = btoa(hashedStr);     // AjYyY2M0NzAzMGIxODAzMDY0ODQ0Yjk0YzFjYjAwNTRhNRe3ZDFlNTUwZTI2YmIzM2YyMTUxNDlkOGIyYzcyZQ==

        const cleanedString = base64Hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');            //regex to cleanup + , / , ==

        const truncatedStr = cleanedString.substring(0, 7);


        const existingShortCode = await prisma.link.findUnique({
            where: {
                shortCode: truncatedStr,
                user: {
                    id: session.user.id
                }
            }
        })
        if (existingShortCode) {
            throw new ClubApiError({
                errorName: "conflict",
                code: 409,
                message: "The URL Already Exists: Duplicate Key Found !"
            })
        }

        const newLink = await prisma.link.create({
            data: {
                url,
                shortCode: truncatedStr,
                userId: session.user.id
            },
        })

        if(!newLink){
            throw new ClubApiError({
                errorName:"conflict",
                code:409,
                message: "ERROR Hai re baba conflict vali"
            })
        }

        return NextResponse.json({
            message: "Link Created",
            link: newLink
        }, {

        })
    } catch (error) {
        if (error instanceof ClubApiError) {
            return NextResponse.json({ message: error.message }, { status: error.code });
        }
        
        const prismaErrorHandler = new PrismaErrorHandler(error)
        return prismaErrorHandler.handleError()
    }
}