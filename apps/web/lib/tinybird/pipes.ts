import { z } from "zod";
import { tb } from "./client";

export const getBrowserClicksTB = tb.buildPipe({
    pipe: "club_sh_browser",
    parameters: z.object({
        user_id: z.string()
    }),
    data: z.object({
        browser: z.string(),
        clicks: z.number()
    })
})
export const getCountryClicksTB = tb.buildPipe({
    pipe: "club_sh_country",
    parameters: z.object({
        user_id: z.string()
    }),
    data: z.object({
        country: z.string(),
        clicks: z.number()
    })
})
export const getReferrersTB = tb.buildPipe({
    pipe: "club_sh_referrer",
    parameters: z.object({
        user_id: z.string()
    }),
    data: z.object({
        referrer: z.string(),
        clicks: z.number()
    })
})
export const getDevicesTB = tb.buildPipe({
    pipe: "club_sh_devices",
    parameters: z.object({
        user_id: z.string()
    }),
    data: z.object({
        device: z.string(),
        clicks: z.number()
    })
})
export const getOSTB = tb.buildPipe({
    pipe: "club_sh_os",
    parameters: z.object({
        user_id: z.string()
    }),
    data: z.object({
        os: z.string(),
        clicks: z.number()
    })
})