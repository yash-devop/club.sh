import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_ID = process.env.GOOGLE_ID || ""
const GOOGLE_SECRET = process.env.GOOGLE_SECRET || ""

export const NEXT_AUTH_OPTIONS = {
    providers: [
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    placeholder: "Enter Email",
                    type: "text"
                },
                password: {
                    label: "password",
                    placeholder: "Enter Password",
                    type: "password"
                }
            },
            authorize: async (creds) => {          // a function which provides us the credentials as the request object from client. ( or ssr )
                console.log('creds', creds);
                return {
                    id: "user1",
                    ...creds
                }
            }
        }),
        GoogleProvider({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
        })
    ],
    // pages: {
    //     "signIn" : '/signin'
    // },
    secret: process.env.NEXTAUTH_SECRET
};