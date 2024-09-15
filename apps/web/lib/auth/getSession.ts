import { getServerSession, NextAuthOptions } from "next-auth";
import { NEXT_AUTH_OPTIONS } from "./options";

interface User {
    user: {
        name: string;
        email: string;
        image?: string;
    }
}

export function getSession() {
    return getServerSession(NEXT_AUTH_OPTIONS) as Promise<User>;
}