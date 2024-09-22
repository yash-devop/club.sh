import DashboardHeader from "@/app/components/dashboard/DashboardHeader"
import LinksContainer from "@/app/components/dashboard/LinksContainer"
import LinksHeader from "@/app/components/dashboard/LinksHeader"
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

import {LogOut} from 'lucide-react'
import { getServerSession } from "next-auth"
export default async function DashboardPage() {

    const session = await getServerSession()
    return (
        <>
            <div className="w-full min-h-screen bg-gray-50 ">
                <div className="bg-white">
                    <MaxWidthContainer className="flex items-center justify-between gap-3 p-5 ">
                        <p className="text-xl md:text-2xl font-semibold tracking-[-2px]">club.url </p>

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    {/* https://github.com/shadcn.png */}
                                    <AvatarImage src={session?.user?.image!} />
                                    <AvatarFallback className="bg-slate-300">CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="px-2 py-3 min-w-0">
                                <DropdownMenuLabel className="min-w-0">
                                    <span>My Account</span>
                                    <p className="truncate text-slate-500 font-light text-sm cursor-pointer hover:text-black">{session?.user?.email }</p>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="gap-2">
                                    <LogOut size={15}/>
                                    <p>Log out</p>
                                </DropdownMenuItem>
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
                        <LinksHeader />
                        <LinksContainer />
                    </MaxWidthContainer>
            </div>
        </>
    )
}


const BorderContainer = ({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <>
            <div className={cn(`border-b bg-white`,className)}>
                {children}
            </div>
        </>
    )
}
const MaxWidthContainer = ({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <>
            <div className={`h-full max-w-6xl w-full mx-auto ${className}`}>
                {children}
            </div>
        </>
    )
}
