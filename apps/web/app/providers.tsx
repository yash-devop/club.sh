"use client"
import { SessionProvider } from "next-auth/react";
import { ModalProvider } from "./components/modals/ModalProvider";
import { TooltipProvider } from "@club/ui";
import { QueryClient  , QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Providers({ children }: {
    children: React.ReactNode
}) {
    const queryClient = new QueryClient({
        defaultOptions:{
            queries:{
                refetchOnWindowFocus: false
            }
        }
    })
    return (
        <>
            <TooltipProvider delayDuration={100}>
                <SessionProvider>
                    <QueryClientProvider client={queryClient}>
                        <ReactQueryDevtools />
                        <ModalProvider>
                            {children}
                        </ModalProvider>
                    </QueryClientProvider>
                </SessionProvider>
            </TooltipProvider>
        </>
    )
}