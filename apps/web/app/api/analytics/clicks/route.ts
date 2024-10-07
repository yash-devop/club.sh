import { getSessionFn } from "@/lib/auth/getSession";
import { getLinkClicksTB } from "@/lib/tinybird/pipes";
import { NextResponse } from "next/server"

export const GET = async () => {
    const session = await getSessionFn();
    if (!session?.user) {
        return new Response("Unauthorized Access. Please login", { status: 401 });
    }
    const links = await getLinkClicksTB({
        user_id: session.user.id
    })
    return NextResponse.json({
        links: links.data
    })
}