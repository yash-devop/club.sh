import Image from "next/image";

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
                {/* Content Section */}
                <div className="h-full w-full flex flex-col gap-4 items-center justify-center mx-auto border-r border-gray-300">
                    <div className="h-full w-full flex flex-col gap-4 items-center justify-center mx-auto">
                        <p className="text-[35px] md:text-[40px] font-semibold tracking-[-2px] py-4">club</p>
                        <div className="max-w-md w-full mx-auto flex flex-col justify-center h-fit md:rounded-2xl">
                            <div className="bg-white shadow border border-border p-7 text-center md:rounded-t-2xl">
                                <h1 className="font-medium text-lg">{variant === "login" ? "Sign in to your Club Account" : "Create a Club account"}</h1>
                            </div>
                            <div className="bg-gray-50 border-l border-r border-b shadow flex flex-col p-4 sm:p-4 md:p-6 lg:p-14 gap-4 md:rounded-b-2xl">
                                {children}
                            </div>
                        </div>
                    </div>
                    <p className="pb-10 font-normal text-black/50 cursor-default select-none">© {new Date().getFullYear()} club</p>
                </div>

                {/* Right Image Section */}
                <div className="h-full w-2/3 overflow-hidden relative hidden lg:flex   ">
                    <div className="absolute -z-10 h-full bg-[#e0e0e0] w-full bg-sblue-400 bg-[radial-gradient(#8c8c8c_1px,transparent_1px)] [background-size:16px_16px]">
                        <Image 
                            layout="fill" 
                            unoptimized 
                            alt="user-pfp" 
                            src="/img_signin.png" 
                            className="object-cover absolute inset-0 right-0 object-left pl-10 py-10" 
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
