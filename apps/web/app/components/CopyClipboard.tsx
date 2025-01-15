"use client"
import { Check, Copy } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const CopyClipboard = ({
    textRef
}: {
    textRef: React.MutableRefObject<HTMLSpanElement | null>
}) => {
    const [isCopying, setIsCopying] = useState(false);
    const timeoutRef = useRef<number | undefined>(undefined); // Use number | undefined for browser compatibility
    const handleCopy = async () => {
        try {
            setIsCopying(true)
            navigator.clipboard.writeText(textRef?.current?.textContent || '').then(() => {
                timeoutRef.current = window.setTimeout(() => { // Use window.setTimeout for browser
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
                clearTimeout(timeoutRef.current); // clearTimeout works in the browser environment
            }
        };
    }, [])

    return (
        <>
            {
                isCopying ? <Check size={13} className="text-slate-700" /> : <Copy onClick={handleCopy} size={13} className="text-slate-700 cursor-pointer" />
            }
        </>
    );
}

export default CopyClipboard;
