export const AuthLayout = ({
    variant,
    children
}: {
    variant: "login" | "register";
    children: React.ReactNode;
}) => {
    return (
        <>
            <div className="h-screen w-full">
                <div className="h-full w-full flex flex-col gap-4 items-center justify-center max-w-3xl mx-auto">
                    <div className="max-w-md w-full mx-auto flex flex-col justify-center h-fit md:rounded-2xl">
                        <div className="bg-white shadow border border-border p-7 text-center md:rounded-t-2xl">
                            <h1 className="font-medium text-lg">{variant === "login" ? "Sign in to your Club Account" : "Create a Club account"}</h1>
                        </div>
                        <div className="bg-gray-50 border-l border-r border-b shadow flex flex-col p-4 sm:p-4 md:p-6 lg:p-14 gap-4 md:rounded-b-2xl">
                            {children}
                        </div>
                    </div>
                    {/* <div className="text-sm">{variant === "login" ? <p>Don't have an account ? <Link className="underline" href={"/signup"}>Sign up</Link></p> : <p>Already have an account ? <Link className="underline" href={"/signin"}>Sign in</Link></p>}</div> */}
                
                </div>
            </div>
        </>
    )
}