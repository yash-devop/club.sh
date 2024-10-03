import { z } from "zod";
import { tb } from "./client";

export const getBrowserClicks = tb.buildPipe({
    pipe: "club_sh_browser",
    data: z.object({
        browser: z.string(),
        clicks: z.number()
    })
})