import React from "react"

export default function Bar({
    name,
    clicks,
    maxCount,
    group
}: {
    name: string,
    clicks: number,
    maxCount: number,
    group: string
}) {
    const dynamicWidth = (clicks / maxCount) * 100
    const dynamicBackgrounds=(group:string)=>{
        if(group === "device" || group === "browser" || group === "os") return 'bg-green-100';
        else if(group === "country") return 'bg-blue-100';
        else if(group === "referrer") return 'bg-fuchsia-100';
        else if(group === "url") return 'bg-orange-100';
        else return 'bg-slate-100'
    }
    return (
        <>
            <div className=" flex items-center justify-between text-sm">
                <div style={{
                    width: `${dynamicWidth}%`,
                }} className={`${dynamicBackgrounds(group)} py-2 px-3 mr-4 rounded-lg font-normal transition-all whitespace-nowrap`}>
                    <p>{name}</p>
                </div>
                <p className="pr-4">{clicks}</p>
            </div>
        </>
    )
}