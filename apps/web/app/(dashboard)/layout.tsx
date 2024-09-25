import DashboardHeader from "@/app/components/dashboard/DashboardHeader"
import LinksContainer from "@/app/components/dashboard/LinksContainer"
import LinksHeader from "@/app/components/dashboard/LinksHeader"
import { Logout } from "@/app/components/Logout"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    BorderContainer,
    cn,
    MaxWidthContainer
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
export default async function DashboardLayout({
    children
}:{
    children: React.ReactNode
}){
    const session = await getServerSession()

    if (!session || !session.user) {
        return redirect("/signin")
    }

    console.log('session?.user?.image ', session.user.image);
    return (
        <>
            <div className="w-full min-h-screen bg-gray-50 ">
                <div className="bg-white">
                    <MaxWidthContainer className="flex items-center justify-between gap-3 p-5 ">
                        <p className="text-xl md:text-2xl font-semibold tracking-[-2px] cursor-pointer">club.url </p>

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                       <AvatarImage src={session.user.image || "https://github.com/shadcn.png"} asChild>
                                        <Image
                                            src={session.user.image || "https://github.com/shadcn.png"}
                                            alt="User Profile Image"
                                            width={40}  
                                            height={40} 
                                            className="rounded-full"
                                        />
                                    </AvatarImage>
                                    <AvatarFallback className="bg-slate-300">CS</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="px-2 py-3 min-w-0">
                                <DropdownMenuLabel className="min-w-0">
                                    <span>{session?.user?.name}</span>
                                    <p className="truncate text-slate-500 font-light text-sm cursor-pointer hover:text-black">{session?.user?.email}</p>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <Logout />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </MaxWidthContainer>
                </div>
                <BorderContainer>
                    <MaxWidthContainer>
                        <DashboardHeader />
                    </MaxWidthContainer>
                </BorderContainer>
                <MaxWidthContainer className="px-4 md:px-8 py-14">
                    {children}
                </MaxWidthContainer>
            </div>
        </>
    )
}
