import { NextRequest } from "next/server"
import UAParser from "ua-parser-js"


type UserType = "browser" | "cpu" | "device" | "os"

type unknownValue = "unknown"

export const getUserAgent = (req: NextRequest["headers"], type: UserType): unknownValue | string  => {

    const userAgent = req.get("user-agent");

    if (!userAgent) {
        return "Unknown";
    }
    const parser = new UAParser(userAgent)

    if (type === "browser") {
        return parser.getBrowser().name ?? "Unknown";
    }
    if (type === "cpu") {
        return parser.getCPU().architecture ?? "Unknown";
    }
    if (type === "os") {
        return parser.getOS().name ?? "Unknown";
    }
    if (type === "device") {
        return parser.getDevice().model ?? "Unknown";
    }

    return "Unknown";
}