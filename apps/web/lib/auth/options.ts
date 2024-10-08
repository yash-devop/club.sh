import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, SessionStrategy } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import prisma from '@club/db/client';

const GOOGLE_ID = process.env.GOOGLE_ID || ""
const GOOGLE_SECRET = process.env.GOOGLE_SECRET || ""

export const NEXT_AUTH_OPTIONS: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true,
            authorization: `https://accounts.google.com/o/oauth2/auth/authorize?response_type=code&prompt=login`
        })
    ],
    session: {
        strategy: "jwt" as SessionStrategy
    },
    pages: {
        signIn: "/signin",
        error: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async jwt({ token , user}) {
            if(user){
                return {
                    ...token,
                    id: user.id
                }
            }
            return token
        },
        session: async ({ session, token, user }) => {
           return {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub
                }
           }
         },
    },
};