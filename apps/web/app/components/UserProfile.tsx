import { Logout } from "@/app/components/Logout"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@club/ui'
import { getInitialsCharacters } from "@club/utils"
import { getServerSession, Session } from "next-auth"
import Image from "next/image"
import { redirect } from "next/navigation"



export default async function UserProfile({
    session
}:{
    session: Session | null
}) {
    if (!session) {
        return redirect("/signin");
    }
    const user = session?.user;
    const userImage = user?.image;
    const userName = user?.name || "Anonymous";
    const userEmail = user?.email || "No email available";
    
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    {userImage ? (
                        <Image
                            src={userImage}
                            className="size-10 rounded-full"
                            width={40}
                            height={40}
                            alt="User Profile"
                        />
                    ) : (
                        <div className="flex items-center justify-center bg-gray-100 rounded-full w-10 h-10">
                            <span className="text-slate-700 font-bold">
                                {getInitialsCharacters(userName)}
                            </span>
                        </div>
                    )}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="px-2 py-3 min-w-0">
                    <DropdownMenuLabel className="min-w-0">
                        <span>{userName}</span>
                        <p className="truncate text-slate-500 font-light text-sm cursor-pointer hover:text-black">
                            {userEmail}
                        </p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Logout />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
