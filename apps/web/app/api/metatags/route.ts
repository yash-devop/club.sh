import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getMetaTags } from "./utils";


const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
  };
  
const urlSearchParamsSchema = z.object({
    url: z.string().refine((url) => {
        console.log('url in zod : ', url);
        try {
            new URL(url)
            return true
        } catch (error) {
            return false
        }
    }, {
        message: "Invalid URL"
    })
})

export const GET = async (req: NextRequest) => {
    const { url } = urlSearchParamsSchema.parse({
        url: req.nextUrl.searchParams.get("url")
    })

    const metaTags = await getMetaTags(url)

    return NextResponse.json({
        ...metaTags,
    },{
        headers: CORS_HEADERS
    })
}

export function OPTIONS() {
    return new Response(null, {
      status: 204,
      headers: CORS_HEADERS,
    });
  }