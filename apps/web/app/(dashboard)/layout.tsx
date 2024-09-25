import DashboardHeader from "@/app/components/dashboard/DashboardHeader"
import {
    BorderContainer,
    MaxWidthContainer
} from '@club/ui'

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import UserProfile from "../components/UserProfile"
export default async function DashboardLayout({
    children
}:{
    children: React.ReactNode
}){
    const session = await getServerSession();

    if (!session || !session.user) {
        return redirect("/signin")
    }
    return (
        <>
            <div className="w-full min-h-screen bg-gray-50 ">
                <div className="bg-white">
                    <MaxWidthContainer className="flex items-center justify-between gap-3 p-5 ">
                        <p className="text-xl md:text-2xl font-semibold tracking-[-2px] cursor-pointer">club.url </p>
                        <UserProfile session={session}/>
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
