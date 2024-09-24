import { cn } from "@club/ui/lib/utils"

export const SkeletonBar = ({
    className
}: {
    className?: string
}) => {
    return (
        <>
            <div className={cn(`py-2 rounded-full w-full bg-gray-200`, className)} />
        </>
    )
}