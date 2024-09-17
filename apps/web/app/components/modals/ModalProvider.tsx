"use client";

import { createContext, Dispatch, SetStateAction, ReactNode, useContext } from "react";
import { useCreateLinkModal } from "./create-link-modal";

type ModalContextProps = {
    showCreateLinkModal: boolean,
    setShowCreateLinkModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalContextProps>({
    showCreateLinkModal: false,
    setShowCreateLinkModal: () => { }
})
export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const { showCreateLinkModal, setShowCreateLinkModal, CreateModalCallback } = useCreateLinkModal()
    return (
        <ModalContext.Provider value={{ showCreateLinkModal, setShowCreateLinkModal }}>
            <CreateModalCallback />
            {children}
        </ModalContext.Provider>
    );
};
