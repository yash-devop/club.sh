import { NEXT_AUTH_OPTIONS } from "@/lib/auth/options";
import NextAuth from "next-auth";

const handler = NextAuth(NEXT_AUTH_OPTIONS);

export const GET = handler
export const POST = handler