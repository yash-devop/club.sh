"use client";

import { createContext, ReactNode } from "react";
import { useCreateLinkModal } from "./create-link-modal";
import { useQrModal } from "./qr-modal";
import { useDeleteModal } from "./delete-link-modal";

type ModalContextProps = {
    showCreateLinkModal: boolean,
    setShowCreateLinkModal: React.Dispatch<React.SetStateAction<boolean>>
    showQRModal: boolean,
    setShowQRModal: React.Dispatch<React.SetStateAction<boolean>>
    showDeleteModal: boolean;
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalContextProps>({
    showCreateLinkModal: false,
    setShowCreateLinkModal: () => {},
    showQRModal: false,
    setShowQRModal: () => {},
    showDeleteModal: false,
    setShowDeleteModal: () => {}
})
export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const { showCreateLinkModal, setShowCreateLinkModal, CreateModalCallback } = useCreateLinkModal()
    const { showQRModal, QRCallback, setShowQRModal } = useQrModal();
    const { showDeleteModal , DeleteCallback , setShowDeleteModal} = useDeleteModal();
    return (
        <ModalContext.Provider value={{ showCreateLinkModal, setShowCreateLinkModal, showQRModal, setShowQRModal , showDeleteModal, setShowDeleteModal}}>
            <CreateModalCallback />
            <QRCallback />
            <DeleteCallback />
            {children}
        </ModalContext.Provider>
    );
};
