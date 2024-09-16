import DashboardHeader from "@/app/components/DashboardHeader"

export default function DashboardPage() {
    return (
        <>
            <div className="w-full min-h-screen h-screen ">
                <div>
                    <MaxWidthContainer className="flex items-center justify-between gap-3 p-5 ">
                        <span>WEB-LOGO</span>
                        <div>
                            <span>USER-LOGO</span>
                        </div>
                    </MaxWidthContainer>
                </div>
                <BorderContainer>
                    <MaxWidthContainer>
                        <DashboardHeader />
                    </MaxWidthContainer>
                </BorderContainer>
                <div className="h-full w-full bg-gray-50">
                    <MaxWidthContainer className="px-8 py-14">
                        <div className="flex items-center justify-between">
                            <p className="font-medium text-2xl tracking-tight">Links</p>
                        </div>
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
