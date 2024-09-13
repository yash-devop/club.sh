"use client"

import { Input } from "@club/ui"

export const RegisterForm = () => {
    return (
        <>
            <form className="flex flex-col space-y-3">
                <Input type="email" placeholder="Email" className="py-2.5 px-3 rounded-md border text-sm" />
                <Input type="password" placeholder="Password" className="py-2.5 px-3 rounded-md border text-sm" />
                <div className="flex flex-col gap-4">
                    <button className="text-center  py-2.5 text-sm rounded-md border bg-white">Create account</button>
                    <span className="text-center text-xs text-gray-400 before:w-1 before:h-1">OR</span>
                    <button className="text-center  py-2.5 text-sm rounded-md border bg-white">Continue with Google</button>
                    <button className="text-center py-2.5 text-sm rounded-md border bg-white">Continue with Github</button>
                </div>
            </form>
        </>
    )
}