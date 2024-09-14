import { z } from "zod";

export const ErrorCode = z.enum([
    "bad_request",
    "not_found",
    "internal_server_error",
    "unauthorized",
    "forbidden",
    "rate_limit_exceeded",
    "conflict",
]);

const errorCodeToHttpStatus: Record<z.infer<typeof ErrorCode>, number> = {
    bad_request: 400,
    unauthorized: 401,
    forbidden: 403,
    not_found: 404,
    conflict: 409,
    rate_limit_exceeded: 429,
    internal_server_error: 500,
};



export class ClubApiError extends Error {
    public readonly errorName: z.infer<typeof ErrorCode>;
    public readonly code: number

    constructor({
        errorName,
        message,
        code
    }: {
        errorName: z.infer<typeof ErrorCode>,
        message: string,
        code: number
    }) {
        super(message)
        this.errorName = errorName
        this.code = code

        // Maintain proper stack trace 
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ClubApiError);
        }
    }
}