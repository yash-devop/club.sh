import { getSessionFn } from "@/lib/auth/getSession"
import { getBrowserClicksTB, getDevicesTB, getOSTB } from "@/lib/tinybird/pipes"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req:NextRequest) => {
    const event = req.nextUrl.searchParams.get("event")

    console.log('event: ', event);
    const session = await getSessionFn();
    if (!session?.user) {
        return new Response("Unauthorized Access. Please login", { status: 401 });
    }

    if(event === "device"){
        const devices = await getDevicesTB({
            user_id: session.user.id
        })
        return NextResponse.json({
            devices: devices.data
        })
    }
    else if(event === "browser"){
        const browser = await getBrowserClicksTB({
            user_id: session.user.id
        })
        return NextResponse.json({
            browsers: browser.data
        })
    }
    else if(event === "os"){
        const os = await getOSTB({
            user_id: session.user.id
        })
        return NextResponse.json({
            os: os.data
        })
    }
    else {
        return NextResponse.json({
            devices: "We couldn't find the specific Tinybird Zod API... Please check your local dev setup."
        })
    }
}