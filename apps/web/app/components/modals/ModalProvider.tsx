"use client";

import { createContext, ReactNode } from "react";
import { useCreateLinkModal } from "./create-link-modal";
import { useQrModal } from "./qr-modal";

type ModalContextProps = {
    showCreateLinkModal: boolean,
    setShowCreateLinkModal: React.Dispatch<React.SetStateAction<boolean>>
    showQRModal: boolean,
    setShowQRModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalContextProps>({
    showCreateLinkModal: false,
    setShowCreateLinkModal: () => { },
    showQRModal: false,
    setShowQRModal: () => { }
})
export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const { showCreateLinkModal, setShowCreateLinkModal, CreateModalCallback } = useCreateLinkModal()
    const { showQRModal, QRCallback, setShowQRModal } = useQrModal();
    return (
        <ModalContext.Provider value={{ showCreateLinkModal, setShowCreateLinkModal, showQRModal, setShowQRModal }}>
            <CreateModalCallback />
            <QRCallback />
            {children}
        </ModalContext.Provider>
    );
};
