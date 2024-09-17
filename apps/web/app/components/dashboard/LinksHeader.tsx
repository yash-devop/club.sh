"use client"

import { useCreateLinkModal } from "../modals/create-link-modal"

export default function LinksHeader() {
    const {CreateModalCallback , setShowCreateLinkModal} = useCreateLinkModal()
    
    return (
        <>
            <div className="flex items-center justify-between pb-5">
                <p className="font-medium text-2xl tracking-tight pl-3 md:p-0">Links</p>
                <div className="bg-red-400 px-5 py-2 rounded-lg" onClick={() => setShowCreateLinkModal(true)}>
                    <p>Create Link C</p>
                </div>
                <CreateModalCallback />
            </div>
        </>
    )
}