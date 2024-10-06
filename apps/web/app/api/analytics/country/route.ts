import { getSessionFn } from "@/lib/auth/getSession"
import { getCountryClicksTB, getDevicesTB } from "@/lib/tinybird/pipes"
import { NextResponse } from "next/server"

export const GET = async () => {

    const session = await getSessionFn();
    if (!session?.user) {
        return new Response("Unauthorized Access. Please login", { status: 401 });
    }
    const countries = await getCountryClicksTB({
        user_id: session.user.id
    })
    return NextResponse.json({
        countries: countries.data
    })
}