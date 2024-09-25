export const MaxWidthContainer = ({
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