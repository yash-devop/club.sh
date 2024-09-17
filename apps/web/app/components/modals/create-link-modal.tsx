"use client";

import { useCallback, useMemo, useState } from "react";
import { Button, Input, Modal, Label, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@club/ui";
import { Globe, HelpCircle, Lock, Star } from "lucide-react";
import LinkLabel from "../dashboard/LinkLabel";

export function useCreateLinkModal() {
    const [showCreateLinkModal, setShowCreateLinkModal] = useState<boolean>(false);
    const [data , setData ] = useState({
        url: ""
    })
    const CreateModalCallback = useCallback(() => (       // return
        <Modal
            showModal={showCreateLinkModal}
            setShowModal={setShowCreateLinkModal}
        >
            <div className="flex flex-col lg:flex-row w-full divide-x-2 h-full overflow-auto lg:overflow-hidden">
                <div className="flex flex-col justify-between w-full h-full">
                    <div className="w-full flex flex-col h-full overflow-auto">
                        <div className="border-b bg-white px-5 py-9 text-center flex items-center justify-center gap-2 h-fit  rounded-tl-lg sticky top-0 lg:static">
                            <Globe size={24} />
                            <p>Create a new link</p>
                        </div>
                        <div className=" h-full overflow-auto flex flex-col gap-4 scrollbar-hide px-12 py-8 bg-gray-50">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 ">
                                    <LinkLabel
                                        label="Destination URL"
                                        labelDescription = "The URL your users will get redirected to when they visit your short link."
                                        additional={<Lock size={15} />}
                                        additionalContent="Generate Random URL"
                                        logo={<HelpCircle size={15} />}
                                    />
                                </div>
                                <Input onChange={(e)=>setData({...data , url: e.target.value})} placeholder="https://google.com/your/link/here" className="placeholder:text-gray-400 placeholder:font-light placeholder:tracking-wide" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="py-7 px-12 bg-white border-t shadow flex items-center justify-center">
                        <Button variant={"outline"} className="w-full bg-slate-800 text-white hover:opacity-80 hover:bg-slate-800 hover:text-white transition-all">Create Link</Button>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full h-full">
                    <div className="w-full flex flex-col h-full overflow-auto">
                        <div className="border-b bg-white px-5 py-9 text-center flex items-center justify-center gap-2 h-fit sticky top-0 lg:static rounded-tl-lg rounded-b-none">
                            <p>Social Preview</p>
                        </div>
                        <div className=" h-full overflow-auto flex flex-col gap-4 scrollbar-hide px-12 py-8 bg-gray-50">
                        
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 ">
                                    <LinkLabel
                                        label="PREVIEW URL"
                                        labelDescription = "The URL your users will get redirected to when they visit your short link."
                                        additional={<Lock size={15} />}
                                        additionalContent="Generate Random URL"
                                        logo={<HelpCircle size={15} />}
                                    />
                                </div>
                                <Input placeholder="https://google.com/your/link/here" className="placeholder:text-gray-400 placeholder:font-light placeholder:tracking-wide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    ), [showCreateLinkModal, setShowCreateLinkModal])

    return useMemo(() => {
        return {
            showCreateLinkModal,
            CreateModalCallback,
            setShowCreateLinkModal,
        }
    }, [showCreateLinkModal, CreateModalCallback, setShowCreateLinkModal])
}