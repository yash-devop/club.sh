import LinksContainer from "@/app/components/dashboard/LinksContainer"
import LinksHeader from "@/app/components/dashboard/LinksHeader"
import { getServerSession } from "next-auth"
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