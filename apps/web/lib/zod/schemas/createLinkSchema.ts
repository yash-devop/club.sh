import { z } from "zod";

const createLinkSchema = z.object({
    url: z.string().url({
        message: "Invalid destination URL"
    }),
    shortCode: z.string().min(7).max(7).optional()
})


export {
    createLinkSchema
}