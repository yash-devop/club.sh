import { z } from "zod";
import { tb } from "./client";

const isoDateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/;
export const publishClickEvents = tb.buildIngestEndpoint({
    datasource: "club_click_events",
    event: z.object({
        click_id: z.string(),
        link_id: z.string(),
        url: z.string(),
        browser: z.string(),
        country: z.string(),
        device: z.string(),
        os: z.string(),
        referrer: z.string(),
        user_id: z.string(),
        shortCode: z.string(),
        urlClicks: z.string(),
        timestamp: z.string().refine((value) => isoDateTimeRegex.test(value), {
            message: "Invalid timestamp format. Must be in ISO 8601 format (e.g., 2024-10-03T12:34:56Z)",
        }),
    }),
});