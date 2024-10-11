import { NextRequest } from "next/server";

export const getIp = (req: NextRequest):string => {
    let ipAddress = req.headers.get("x-real-ip") as string;

    const forwardedFor = req.headers.get("x-forwarded-for") as string;
    if (!ipAddress && forwardedFor) {
        ipAddress = forwardedFor?.split(",").at(0) ?? "Unknown";
    }

    return ipAddress;
};
