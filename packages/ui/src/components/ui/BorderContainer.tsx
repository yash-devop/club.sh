import { cn } from "@club/ui/lib/utils"

export const BorderContainer = ({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) => {
    return (
        <>
            <div className={cn(`border-b bg-white`, className)}>
                {children}
            </div>
        </>
    )
}