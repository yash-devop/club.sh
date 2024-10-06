"use client"

import { cn } from "@club/ui"
import React, { useEffect, useRef, useState } from "react"


export default function Tab<T extends string>({
    options,
    onSelect,
    selected,

}: {
    options: {
        id: T,
        name: string
    }[],
    selected: T,
    onSelect: React.Dispatch<React.SetStateAction<T>>
}) {
    const [highlightStyle, setHighlightStyle] = useState({ width: 0, left: 0 }); 
    const navRef = useRef<HTMLDivElement | null>(null); 

    useEffect(() => {
        console.log('IM RE_RENDERING');
        if (navRef.current) {
            console.log('id:',selected);
            const activeIndex = options.findIndex((item) => item.id === selected);
            console.log('active idx: ', activeIndex);
            if (activeIndex !== -1) {
                const activeLink = navRef.current.children[activeIndex] as HTMLElement;

                setHighlightStyle({
                    width: activeLink.offsetWidth,
                    left: activeLink.offsetLeft
                });
            }
        }
    }, [selected]);
    return (
        <>
            <div  className="relative w-full">
                <div ref={navRef} className="flex items-center gap-4 relative py-2">
                    {options.map(({ id, name }) => (
                        <div
                            key={id}
                            onClick={()=>onSelect(id)}
                            className={cn(`relative hover:bg-gray-100/90 px-3 py-2 rounded-lg cursor-pointer text-center`, id === selected
                            ? "text-black font-medium"
                            : "text-gray-400 hover:text-gray-500")}       // removed: pathname === item.path && "text-slate-700"
                        >
                            <span className="font-light tracking-tight text-sm">{name}</span>
                        </div>
                    ))}

                    {/* Highlight div that moves under the active nav item */}
                    <div
                        className="bg-black h-[1.5px] absolute bottom-0 transition-all duration-300"
                        style={{ width: `${highlightStyle.width}px`, left: `${highlightStyle.left}px` }}
                    />
                </div>
            </div>

        </>
    )
}