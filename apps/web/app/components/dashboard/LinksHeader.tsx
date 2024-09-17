"use client"

import { Button } from "@club/ui"
import { useCreateLinkModal } from "../modals/create-link-modal"

export default function LinksHeader() {
    const {CreateModalCallback , setShowCreateLinkModal} = useCreateLinkModal()

    return (
        <>
            <div className="flex items-center justify-between pb-5">
                <p className="font-medium text-2xl tracking-tight pl-3 md:p-0">Links</p>
                <Button className="transition-all hover:outline outline-slate-300 outline-offset-[0.5px]" onClick={() => setShowCreateLinkModal(true)}>
                    <p>Create Link C</p>
                </Button>
                <CreateModalCallback />
            </div>
        </>
    )
}