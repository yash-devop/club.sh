import { Chrome, LaptopMinimal, Link2, Shell } from "lucide-react";
import React from "react"


import type { SVGProps } from 'react';
import LinkLogo from "../dashboard/LinkLogo";
import Image from "next/image";

export function RiWindowsFill(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="black" d="m3.001 5.479l7.377-1.016v7.127H3zm0 13.042l7.377 1.017v-7.04H3zm8.188 1.125L21.001 21v-8.502h-9.812zm0-15.292v7.236h9.812V3z"></path></svg>);
}
export default function Bar({
    name,
    clicks,
    maxCount,
    group,
}: {
    name: string;
    clicks: number;
    maxCount: number;
    group: string;
}) {
   
    const dynamicWidth = maxCount > 0 
        ? Math.max((clicks / maxCount) * 100 , 30)
        : 0;

    const dynamicBackgrounds = (group: string) => {
        if (group === "device" || group === "browser" || group === "os") return 'bg-green-100';
        else if (group === "country") return 'bg-blue-100';
        else if (group === "referrer") return 'bg-fuchsia-100';
        else if (group === "url") return 'bg-orange-100';
        else return 'bg-slate-100';
    };

    return (
        <div className="flex items-center justify-between text-sm w-full gap-4">
            <div
                style={{
                    width: `${dynamicWidth}%`,
                }}
                className={`${dynamicBackgrounds(group)} py-2 px-3 mr-4 rounded-lg font-normal transition-all whitespace-nowrap flex items-center gap-2`}
            >
                <div className="shrink-0">
                    {
                        group === "country" ? <Image width={20} height={20} src={`https://flag.vercel.app/m/${name.toUpperCase() || "IN"}.svg`} alt="country_logo" className="w-5" /> :
                        group === "referrer" ? <Link2 size={15} /> :
                        group === "device" ? <LaptopMinimal size={15} /> :
                        group === "browser" ? <Chrome size={15} /> :
                        group === "os" && name === "Windows" ? <RiWindowsFill /> :
                        group === "os"  ? <Shell size={15}/> :
                        group === "url" ? <LinkLogo src={name} alt="" containerSize="size-4 rounded-full"/> :
                        null
                    }
                </div>
                <p className="truncate" title={name}>{name}</p>
            </div>
            <p className="pr-4" title={clicks.toString()}>{clicks}</p>
        </div>
    );
}