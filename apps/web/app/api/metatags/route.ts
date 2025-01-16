import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import og from "open-graph";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const urlSearchParamsSchema = z.object({
  url: z.string().refine(
    (url) => {
      console.log("url in zod : ", url);
      try {
        new URL(url);
        return true;
      } catch (error) {
        return false;
      }
    },
    {
      message: "Invalid URL",
    }
  ),
});

export const GET = async (req: NextRequest) => {
  const { url } = urlSearchParamsSchema.parse({
    url: req.nextUrl.searchParams.get("url"),
  });

  try {
    const meta = await new Promise<any>((resolve, reject) => {
      og(url, (err, meta) => {
        if (err) reject(err);
        else resolve(meta);
      });
    });

    return NextResponse.json(
      {
        title: meta?.title,
        description: meta?.description,
        image: meta?.image?.url,
      },
      { headers: CORS_HEADERS }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch metadata" },
      { status: 500, headers: CORS_HEADERS }
    );
  }
};

export function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}
