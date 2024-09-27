"use client"
import { cn } from "@club/ui/lib/utils";
import { Button } from "./button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog"


export function Modal({
    className,
    children,
    showModal,
    setShowModal
}: {
    className?:string,
    children: React.ReactNode,
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <Dialog
            open={showModal}
            onOpenChange={(open) => {
                if (!open) {
                    closeModal();
                }
            }}
        >
            {/* <DialogHeader>HELLo</DialogHeader> */}
            <DialogTitle className="hidden"></DialogTitle>
            {/* <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger> */}
            <DialogContent className={cn(`max-w-5xl max-h-[800px] h-full p-0 backdrop-blur-2xl`,className)}>
                {children}
            </DialogContent>
        </Dialog>
    )
}
