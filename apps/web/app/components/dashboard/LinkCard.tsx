"use client"

import { Copy, CornerDownRight, EllipsisVertical } from "lucide-react";
import {
    cn,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@club/ui'
import LinkLogo from "./LinkLogo";
import Link from "next/link";
import Image from "next/image";
import CopyToClipBoard from "../CopyClipboard";
import { useRef } from "react";
export default function LinkCard({
    url,
    shortCode,
    isPending,
    user
}: {
    url: string,
    shortCode: string,
    isPending: boolean,
    user:{
        image: string | null
    }
}) {

    const textRef = useRef(null);

    return (
        <>
            <div className={`bg-white border rounded-xl hover:shadow-2xl hover:shadow-gray-200 transition-all ${cn(isPending ? "blur-[102px]" : "blur-0")}`}>

                <div className="flex items-center gap-5 p-4">
                    <div className="border rounded-full size-12 p-2 items-center bg-gradient-to-t from-gray-100 hidden sm:flex shrink-0">
                        <LinkLogo alt="link-logo" src={url} containerSize="sm"/>
                    </div>
                    <div className="flex items-center justify-between gap min-w-0 w-full">
                        <div className="flex flex-col min-w-0">
                            <div className="flex items-center gap-3">
                                <span id="shortUrl" ref={textRef} className="font-medium text-sm">{`${process.env.NODE_ENV === "development" ? "localhost:3000" : "club.sh"}/${shortCode}`}</span>
                                <CopyToClipBoard textRef={textRef}/>
                            </div>
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="flex items-center gap-1 min-w-0">
                                    <CornerDownRight size={15} className="text-slate-500 cursor-pointer" />
                                    <Link href={url} className="truncate text-slate-500 font-light text-sm cursor-pointer hover:text-black">
                                        {url}
                                    </Link>
                                </div>
                                <div className="flex items-center gap-3 text-slate-500">
                                    {
                                        <Image src={user.image!} alt="user-image" width={16} height={16} className="rounded-full" unoptimized/>
                                    }
                                    {/* <div className="w-4 h-4 rounded-full bg-slate-300 shrink-0 hidden md:block"></div> */}
                                    <span className="text-xs hidden lg:block">Sep 2</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center">
                                    <div className="border hover:bg-slate-50 rounded-md p-1.5 w-fit shrink-0 cursor-pointer">
                                        <EllipsisVertical size={20} />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="px-2 py-3 min-w-0">
                                    <DropdownMenuItem>
                                        <p>Edit Link</p>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
