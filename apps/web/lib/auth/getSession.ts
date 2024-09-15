import { getServerSession, NextAuthOptions } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "./options";

interface User {
    user: {
        id: string,
        name: string;
        email: string;
        image?: string;
    }
}

export function getSessionFn() {
    return getServerSession(NEXT_AUTH_OPTIONS) as Promise<User>;
}