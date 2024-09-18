import { Prisma } from "@club/db/client";
import { NextResponse } from "next/server";
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
    public readonly inputField?: {
        [key: string]: string
    }

    constructor({
        errorName,
        message,
        code,
        inputField
    }: {
        errorName: z.infer<typeof ErrorCode>,
        message: string,
        code: number,
        inputField?: {
            [key: string]: string
        }
    }) {
        super(message)
        this.errorName = errorName
        this.code = code
        this.inputField = inputField;
        // Maintain proper stack trace 
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ClubApiError);
        }
    }
}

export class PrismaErrorHandler {
    private error: Prisma.PrismaClientKnownRequestError | unknown;

    constructor(error: unknown) {
        this.error = error
    }

    public handleError(): NextResponse<{
        message: string,
        code: number,
    }> {
        if (this.error instanceof Prisma.PrismaClientKnownRequestError) {
            // get error code of prisma from => https://www.prisma.io/docs/orm/reference/error-reference#error-codes
            switch (this.error.code) {
                case 'P2002':
                    return NextResponse.json({
                        message: "A unique constraint violation occurred. Duplicate entry found.",
                        code: 409
                    }, { status: 409 });
                case 'P2003':
                    return NextResponse.json({
                        message: "A foreign key constraint violation occurred.",
                        code: 409

                    }, { status: 400 });
                case 'P2025':
                    return NextResponse.json({
                        message: "The record you are trying to modify does not exist.",
                        code: 409

                    }, { status: 404 });
                default:
                    return NextResponse.json({
                        message: "A database error occurred.",
                        code: 409
                    }, { status: 500 });
            }
        }
        return NextResponse.json({
            message: "An unexpected error occurred.",
            code: 500
        }, { status: 500 });
    }
}