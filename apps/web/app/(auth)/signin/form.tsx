"use client"

import { Button, Github, Google, Input } from "@club/ui"
import { signIn, useSession } from "next-auth/react"
import { useState } from "react"


export const authMethods = ["google", "github"] as const
type AuthMethods = typeof authMethods[number]



export const GoogleButton = () => {
    return (
        <>
            <p>IM GOOGLE BTN</p>
        </>
    )
}
export const GithubButton = () => {
    return (
        <>
            <p>IM Github BTN</p>
        </>
    )
}

export const LoginForm = () => {
    const [clickedMethod, setClickedMethod] = useState<AuthMethods | undefined>(undefined);
    const handleForm = async (e: React.FormEvent) => {
        e.preventDefault();
        if (clickedMethod === "google") {
            await signIn("google",{
                callbackUrl: "/"
            })
        }
        else if (clickedMethod === "github") {
            await signIn("github")
        }
        else {
            setClickedMethod(undefined)
        }

    }
    return (
        <>
            <form className="flex flex-col space-y-3" onSubmit={handleForm}>
                <div className="flex flex-col gap-4">
                    <Button type="submit" onClick={() => setClickedMethod("google")} variant={"outline"} className="text-center  py-2.5 text-sm rounded-md border bg-white gap-2">
                        <Google className="size-4" />
                        <span className="font-normal">Continue with Google</span>
                    </Button>
                    <Button type="submit" onClick={() => setClickedMethod("github")} variant={"outline"} className="text-center py-2.5 text-sm rounded-md border bg-white gap-2">
                        <Github className="size-4" />
                        <span className="font-normal">Continue with Github</span>
                    </Button>
                </div>
            </form>
            {
                JSON.stringify(useSession().data)
            }
        </>
    )
}