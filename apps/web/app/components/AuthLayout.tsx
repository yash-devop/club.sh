export const AuthLayout = ({
    variant,
    children
}: {
    variant: "login" | "register";
    children: React.ReactNode;
}) => {
    return (
        <>
            <div className="h-screen w-full flex">
                <div className="h-full w-full flex flex-col gap-4 items-center justify-center  mx-auto">
                    <div className="h-full w-full flex flex-col gap-4 items-center justify-center mx-auto">
                        <p className="text-[35px] md:text-[40px] font-semibold tracking-[-2px] py-4">club.sh</p>
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
                    <p className="pb-10 font-normal text-black/50 cursor-default select-none">© {new Date().getFullYear()} club.sh</p>
                </div>
                <div className="h-full w-2/3 overflow-hidden relative border-l hidden lg:flex">
                <div className="absolute inset-0 -z-10 h-full w-full bg-gray-50/90 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="bg-resd-400 h-[800pxs] w-screen absolute bottom-0 -left-10 rounded-xl rounded-b-none p-2 flex items-center justify-center overflow-hidden">
                        <img src="img_signin.png" className="object-cover h-full"/>
                    </div>
                </div>
            </div>
        </>
    )
}