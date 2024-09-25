"use client"
import { Check, Copy } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const CopyClipboard = ({
    textRef
}: {
    textRef: React.MutableRefObject<HTMLSpanElement | null>
}) => {
    const [isCopying, setIsCopying] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const handleCopy = async () => {
        try {
            setIsCopying(true)
            navigator.clipboard.writeText(textRef?.current?.textContent || '').then(() => {
                timeoutRef.current = setTimeout(() => {
                    setIsCopying(false);
                }, 5000);
            });
        } catch (error) {
            setIsCopying(false)
            console.log('error :', error);
        }
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [])

    return (
        <>
            {
                isCopying ? <Check size={15} className="text-slate-400" /> : <Copy onClick={handleCopy} size={15} className="text-slate-400 cursor-pointer" />
            }
        </>
    );
}

export default CopyClipboard;
