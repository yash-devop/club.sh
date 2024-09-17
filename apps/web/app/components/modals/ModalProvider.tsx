"use client"

import { createContext, Dispatch, SetStateAction, useState } from "react"
import {useCreateLinkModal} from "./create-link-modal"

export const ModalContext = createContext<{
    setShowCreateLinkModal: Dispatch<React.SetStateAction<boolean>>
}>({
    setShowCreateLinkModal: () => {}
})

export default function ModalProvider({
    children
}: {
    children: React.ReactNode
}) {
    const {CreateModalCallback , setShowCreateLinkModal} = useCreateLinkModal()
    return (
        <>
            <ModalContext.Provider value={{setShowCreateLinkModal}}>
                <CreateModalCallback />
                {children}
            </ModalContext.Provider>
        </>
    )
}