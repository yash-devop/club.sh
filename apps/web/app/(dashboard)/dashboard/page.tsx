import DashboardHeader from "@/app/components/dashboard/DashboardHeader"
import LinksContainer from "@/app/components/dashboard/LinksContainer"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
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
export default function DashboardPage() {
    return (
        <>
            <div className="w-full min-h-screen h-screen ">
                <div>
                    <MaxWidthContainer className="flex items-center justify-between gap-3 p-5 ">
                        <p className="text-xl md:text-2xl font-semibold tracking-[-2px]">club.url </p>

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback className="bg-slate-300">CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="px-2 py-3 min-w-0">
                                <DropdownMenuLabel className="min-w-0">
                                    <span>My Account</span>
                                    <p className="truncate text-slate-500 font-light text-sm cursor-pointer hover:text-black">kamble1234meena@gmail.com</p>
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
                <div className="h-full w-full bg-gray-50">
                    <MaxWidthContainer className="px-4 md:px-8 py-14">
                        <div className="flex items-center justify-between pb-5">
                            <p className="font-medium text-2xl tracking-tight pl-3 md:p-0">Links</p>
                            <div className="bg-red-400 px-5 py-2 rounded-lg">
                                <p>Create Link C</p>
                            </div>
                        </div>
                        <LinksContainer />
                    </MaxWidthContainer>
                </div>
            </div>
        </>
    )
}


const BorderContainer = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <div className="border-b">
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
