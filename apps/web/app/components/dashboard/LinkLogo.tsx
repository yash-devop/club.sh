"use client"

import { cn } from "@club/ui";
import { Globe } from "lucide-react";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

export default function LinkLogo({
    containerSize ,
    className,
    alt,
    ...props
}: {
    containerSize?:string
} & ImageProps) {
    const [error, setError] = useState(false)
    const [errorUrl , setErrorUrl] = useState("")
    const [src, setSrc] = useState(props.src)
    useEffect(() => {
        setError(false)
        setSrc(props.src)
    }, [props.src]);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        if (target.naturalWidth <= 16 && target.naturalHeight <= 16) {
            setError(true)
            setErrorUrl(`https://avatar.vercel.sh/${encodeURIComponent(alt)}`)
        }
    };

    const isValidUrl=(url:string)=>{
        try {
            new URL(url)
            return true
        } catch (error) {
            return false
        }
    }
    return isValidUrl(props.src as string) ? (
        <>
            <div className={cn(`size-10 flex items-center justify-center`,containerSize)}>
                <Image
                    {...props}
                    src={`${error ? errorUrl : `https://www.google.com/s2/favicons?sz=64&domain_url=${props.src}`}`}
                    alt={alt}
                    width={20}
                    height={20}
                    onLoad={handleLoad}
                    onError={() => {
                        setError(true)
                        setErrorUrl(`https://avatar.vercel.sh/${encodeURIComponent(alt)}`)
                    }}
                    className={cn("h-8 w-8 rounded-full sm:h-7 sm:w-7 object-contain", className)}
                    draggable={false}
                    unoptimized
                />
            </div>
        </>
    ) : (
        <div className="size-10 text-center flex items-center justify-center rounded-full bg-slate-200 p-2 text-slate-700">
            <Globe size={25} />
        </div>
    )
}