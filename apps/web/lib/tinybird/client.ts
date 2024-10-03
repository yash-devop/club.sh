import { Tinybird } from "@chronark/zod-bird";

export const tb = new Tinybird({
    baseUrl: process.env.TINYBIRD_BASE_URL as string,
    token: process.env.TINYBIRD_API_KEY as string
})