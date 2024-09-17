"use client"
import { Button } from "./button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "./dialog"


export function Modal({
    children,
    showModal,
    setShowModal
}: {
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
            {/* <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger> */}
            <DialogContent className="sm:max-w-[425px]">
                {children}
            </DialogContent>
        </Dialog>
    )
}
