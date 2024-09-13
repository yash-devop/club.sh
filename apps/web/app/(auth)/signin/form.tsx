"use client"

import { Button, Github, Google, Input } from "@club/ui"
import { Eye, EyeOff, Mail } from "lucide-react"
import { signIn, useSession } from "next-auth/react"
import { FormEvent, useState } from "react"


export const authMethods = ["email", "google", "github"] as const
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
export const EmailButton = () => {
    return (
        <>
            <p>IM Email BTN</p>
        </>
    )
}

export const LoginForm = () => {
    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });
    const [clickedMethod, setClickedMethod] = useState<AuthMethods | undefined>(undefined);
    const [showPasswordField, setShowPasswordField] = useState(false);
    console.log('clicked method :', clickedMethod);
    const handleForm = async (e: React.FormEvent) => {
        e.preventDefault()
        if (clickedMethod === "email") {
            return await signIn("credentials", signInData)
        }
        else if (clickedMethod === "google") {
            await signIn("google")
        }
        else if (clickedMethod === "github") {
            await signIn("github")
        }
        else {
            setClickedMethod(undefined)
        }

    }
    const showPassword = showPasswordField ? "text" : "password";
    return (
        <>
            <form className="flex flex-col space-y-3" onSubmit={handleForm}>
                <Input type="email" placeholder="Email" className="py-2.5 px-3 rounded-md border text-sm" onChange={(e) => setSignInData({ ...signInData, email: e.target.value })} />
                <div className="relative">
                    <Input type={showPassword} placeholder="Password" className="py-2.5 px-3 rounded-md border text-sm relative" onChange={(e) => setSignInData({ ...signInData, password: e.target.value })} />
                    {
                        showPasswordField ? <EyeOff size={15} className="absolute top-3 right-3 text-gray-400 cursor-pointer" onClick={() => setShowPasswordField(false)} /> : <Eye size={15} className="absolute top-3 right-3 text-gray-400 cursor-pointer" onClick={() => setShowPasswordField(true)} />
                    }
                </div>
                <div className="flex flex-col gap-4">
                    <Button type="submit" onClick={() => setClickedMethod("email")} variant={"outline"} className="text-center  py-2.5 text-sm rounded-md border bg-white flex gap-2">
                        <Mail className="size-4" />
                        <span className="font-normal">Sign in to your Email</span>
                    </Button>
                    <span className="text-center text-xs text-gray-400 before:w-1 before:h-1">OR</span>
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