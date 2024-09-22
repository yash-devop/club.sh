"use client"

import { DropdownMenuItem } from "@club/ui";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

export const Logout = () => {
    const router = useRouter()
    return (
        <>
            <DropdownMenuItem className="gap-2 cursor-pointer" onClick={async () => {
                    await signOut();
                    router.push("/signin")
                }}>
                <LogOut size={15} />
                <p>Log out</p>
            </DropdownMenuItem>
        </>

    )
}