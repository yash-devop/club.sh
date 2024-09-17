"use client"
import { SessionProvider } from "next-auth/react";
import { ModalProvider } from "./components/modals/ModalProvider";
import { TooltipProvider } from "@club/ui";

export default function Providers({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <TooltipProvider delayDuration={100}>
                <SessionProvider>
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </SessionProvider>
            </TooltipProvider>
        </>
    )
}