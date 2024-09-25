import DashboardHeader from "@/app/components/dashboard/DashboardHeader"
import LinksContainer from "@/app/components/dashboard/LinksContainer"
import LinksHeader from "@/app/components/dashboard/LinksHeader"
import { Logout } from "@/app/components/Logout"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    cn
} from '@club/ui'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@club/ui'

import { LogOut } from 'lucide-react'
import { getServerSession } from "next-auth"
import Image from "next/image"
import { redirect } from "next/navigation"
export default async function DashboardPage() {
    const session = await getServerSession()
    if (!session || !session.user) {
        return redirect("/signin")
    }
    return (
        <>
            <LinksHeader />
            <LinksContainer />
        </>
    )
}