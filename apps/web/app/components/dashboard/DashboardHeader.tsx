'use client'

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import {cn} from '@club/ui'
const DashboardHeader = () => {
    const pathname = usePathname(); 
    const router = useRouter();
    const [highlightStyle, setHighlightStyle] = useState({ width: 0, left: 0 }); 
    const navRef = useRef<HTMLDivElement | null>(null); 

    const navItems = [
        { name: 'Links', path: '/dashboard' },
        { name: 'Analytics', path: '/analytics' },
        { name: 'Settings', path: '/settings' }
    ];

    useEffect(() => {
        console.log('IM RE_RENDERING');
        if (navRef.current) {
            const activeIndex = navItems.findIndex((item) => item.path === pathname);       // if matched ? then return the index else -1 will be returned.
            if (activeIndex !== -1) {
                const activeLink = navRef.current.children[activeIndex] as HTMLElement;

                setHighlightStyle({
                    width: activeLink.offsetWidth,
                    left: activeLink.offsetLeft
                });
            }
        }
    }, [pathname]);

    return (
        <div className="relative">
            <div ref={navRef} className="flex items-center gap-4 relative px-5 py-1">
                {navItems.map((item) => (
                    <div
                        key={item.path}
                        onClick={() => router.push(item.path)} 
                        className={cn(`relative hover:bg-gray-100/90 hover:text-black px-3 py-1 rounded-lg cursor-pointer text-center`,'text-slate-700')}       // removed: pathname === item.path && "text-slate-700"
                    >
                        <span className="font-light tracking-tight text-sm">{item.name}</span>
                    </div>
                ))}

                {/* Highlight div that moves under the active nav item */}
                <div
                    className="bg-black h-[1.5px] absolute bottom-0 transition-all duration-300"
                    style={{ width: `${highlightStyle.width}px`, left: `${highlightStyle.left}px` }}
                />
            </div>
        </div>
    );
}

export default DashboardHeader;
