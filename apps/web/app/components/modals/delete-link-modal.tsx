"use client";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { Button, Input, Modal } from "@club/ui";
import LinkLogo from "../dashboard/LinkLogo";
import { fetcher, getUrlwithoutWWW } from "@club/utils";
import { useMutation } from "@tanstack/react-query";

type LinkProps = {
    linkId: string,
    url: string,
    shortCode: string
}

function DeleteModalCallback({
    showDeleteModal,
    setShowDeleteModal,
    linkProps
}: {
    showDeleteModal: boolean;
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>,
    linkProps?: LinkProps
}) {

    if (!linkProps) return;
    const { shortCode, url , linkId } = linkProps
    const environmentBasedURL = `${process.env.NODE_ENV === "development" ? "localhost:3000" : "club.sh"}/${shortCode}`
    // const {setShowDeleteModal} = useDeleteModal()
    const { isPending, mutate, error } = useMutation({
        mutationFn: fetcher
    })
    // const urlWithoutWWW = getUrlwithoutWWW(environmentBasedURL)
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Succesfull.');

        mutate({
            input: `/api/links?linkId=${linkProps.linkId}`,
            init: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        })
        // setShowDeleteModal(false)
    }
    console.log('link props :', linkProps);
    return (
        <Modal
            showModal={showDeleteModal}
            setShowModal={setShowDeleteModal}
            className="max-w-lg max-h-[500px] lg:max-h-[460px] bg-gray-50"
        >
            <div className="flex flex-col items-center gap-10">
                <div className="px-5 py-7 bg-white border-b flex flex-col items-center justify-center w-full h-fit rounded-tr-md rounded-tl-md">
                    <div className="border rounded-full size-12 p-2 items-center bg-gradient-to-t from-gray-100 flex shrink-0">
                        <LinkLogo src={url} alt="link-logo" />
                    </div>
                    <div className="space-y-4 text-center pt-4">
                        <span className="text-black font-medium text-xl">Delete {environmentBasedURL}</span>
                        <p className="max-w-[440px] text-sm text-wrap text-center font-mono">Warning: Deleting this link will remove it forever from our database. This action cannot be undone – proceed with caution.</p>
                    </div>
                </div>
                <div className="py-4 px-16 w-full flex flex-col gap-3">
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
                        <div className="space-y-1">
                            <span className="text-sm font-light">To verify, type <span className="font-medium">{environmentBasedURL}</span> below</span>
                            <Input type="text" placeholder="" required pattern={environmentBasedURL} className="" />
                        </div>
                        <Button type="submit" variant="destructive" size={"sm"} className="px-4 py-2">
                            Confirm Delete
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteModalCallback;

export function useDeleteModal() {
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const DeleteCallback = useCallback(({
        linkProps
    }: {
        linkProps?: LinkProps
    }) => (
        <DeleteModalCallback
            showDeleteModal={showDeleteModal}
            setShowDeleteModal={setShowDeleteModal}
            linkProps={linkProps}
        />
    ),
        [showDeleteModal, setShowDeleteModal]
    );

    return useMemo(() => ({
        showDeleteModal,
        DeleteCallback,
        setShowDeleteModal,
    }), [showDeleteModal, DeleteCallback, setShowDeleteModal]);
}
