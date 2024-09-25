"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Input, Modal } from "@club/ui";
import { Globe, HelpCircle, Loader2, Lock, Shuffle } from "lucide-react";
import LinkLabel from "../dashboard/LinkLabel";
import { useLink } from "@/lib/query/use-links";
import { getShortCode } from "@club/utils";
import { createLinkSchema } from "@/lib/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CreateLinkProps } from "@/lib/types";
import LinkLogo from "../dashboard/LinkLogo";
import Preview from "../dashboard/Preview";
import { useDebounce } from "use-debounce";

type CreateLinkSchemaType = z.infer<typeof createLinkSchema>

function CreateLinkModalCallback({
    showCreateLinkModal,
    setShowCreateLinkModal
}: {
    showCreateLinkModal: boolean,
    setShowCreateLinkModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const { register, handleSubmit, formState: {
        errors,
        isSubmitting,

    }, setError, setValue } = useForm<CreateLinkSchemaType>({
        resolver: zodResolver(createLinkSchema)
    })
    const [data, setData] = useState<CreateLinkProps>({          // add types.
        url: "",
        shortCode: "",
        title: "",
        description: "",
        image: ""
    })
    const [generatingMetatags, setGeneratingMetatags] = useState(false)

    const { mutate, isPending } = useLink()
    const [debouncedUrl] = useDebounce(data.url, 800)
    const handleCreateLink: SubmitHandler<CreateLinkSchemaType> = (formData) => {
        console.log('QUERY DATA VALUES : ', formData);
        const linkData = {
            ...data,
            shortCode: formData.shortCode || getShortCode("") // If no shortCode is provided, use a generated one
        };
        mutate({
            input: "/api/links/shorten",
            init: {
                body: JSON.stringify(linkData),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        }, {
            onError: (error: any) => {
                const parsedError = JSON.parse(error?.message)
                if (parsedError?.field?.shortCode) {
                    setError("shortCode", {
                        type: "manual",
                        message: parsedError.field.shortCode,
                    });
                } else if (parsedError?.field?.url) {
                    setError("url", {
                        type: "manual",
                        message: parsedError.field.url,
                    })
                }
            },
            onSuccess: (data)=>{
                setShowCreateLinkModal(false)
            }
        })
    }
    const handleShortCode = () => {
        const generatedShortCode = getShortCode("");
        setValue("shortCode", generatedShortCode);
        setData({ ...data, shortCode: generatedShortCode });
    }

    useEffect(() => {
        (async () => {
            if (showCreateLinkModal && debouncedUrl.length > 0) {
                setGeneratingMetatags(true)
                // best way to check if a url is valid or not by using URL object
                try {
                    new URL(debouncedUrl);      // please read URL mdn docs.
                    const response = await fetch(`api/metatags?url=${debouncedUrl}`, {
                        method: "GET"
                    })
                    if (response.status === 200) {
                        const metaData = await response.json();

                        console.log('metaData: ', metaData);
                        setData((prev) => {
                            return {
                                ...prev,
                                title: metaData?.title?.length < 20 ? metaData?.title : metaData?.title?.substring(0, 60) + "...",
                                description: metaData?.description?.length < 200 ? metaData?.description : metaData?.description?.substring(0, 200) + "...",
                                image: metaData.image
                            }
                        })
                        setGeneratingMetatags(false)

                    }
                } catch (_) {
                    setGeneratingMetatags(false)
                }
            }
            else {
                setGeneratingMetatags(false)
            }
        })()
    }, [debouncedUrl, showCreateLinkModal])
    return (
        <Modal
            showModal={showCreateLinkModal}
            setShowModal={setShowCreateLinkModal}
        >
            <div className="flex flex-col lg:flex-row w-full divide-x-2 h-full overflow-auto lg:overflow-hidden">
                <form onSubmit={handleSubmit(handleCreateLink)} className="flex flex-col justify-between w-full h-full">
                    <div className="w-full flex flex-col h-full overflow-auto">
                        <div className="border-b bg-white px-5 py-7 text-center flex items-center justify-center gap-3 h-fit  rounded-tl-lg sticky top-0 lg:static text-slate-800 text-lg">
                            <LinkLogo className="sm:h-10 sm:w-10" alt="new link" src={debouncedUrl} />
                            <p className="font-semibold p-2">Create a new link</p>
                        </div>
                        <div className=" h-full overflow-auto flex flex-col gap-7 scrollbar-hide px-12 py-8 bg-gray-50 rounded-bl-lg">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 ">
                                    <LinkLabel
                                        label="Destination URL"
                                        labelDescription="The URL your users will get redirected to when they visit your short link."
                                        logo={<HelpCircle size={15} />}
                                    />
                                </div>
                                <Input
                                    
                                    {...register("url", {
                                        required: "Destination URL is required"
                                    })}
                                    onChange={(e) => {
                                        setValue("url", e.target.value);
                                        setData({ ...data, url: e.target.value });
                                    }}
                                    placeholder="https://google.com/your/link/here" className="placeholder:text-gray-400 placeholder:font-light placeholder:tracking-wide" />
                                {errors.url ? <p className="text-red-600 font-light text-sm">{JSON.stringify(errors.url?.message)}</p> : null}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 ">
                                    <LinkLabel
                                        label="Short Link"
                                        labelDescription="The URL your users will get redirected to when they visit your short link."
                                        additional={<Shuffle size={15} onClick={handleShortCode} />}
                                        additionalContent="Generate Random Short Link"
                                        logo={<HelpCircle size={15} />}
                                    />
                                </div>
                                <Input
                                    // {...register("shortCode")}
                                    name="shortCode"
                                    value={data.shortCode}
                                    required={false}
                                    onChange={(e) => {
                                        setValue("shortCode", e.target.value);  // Update form value
                                        setData({ ...data, shortCode: e.target.value });  // Update local state for input
                                    }}
                                    placeholder="https://google.com/your/link/here" className="placeholder:text-gray-400 placeholder:font-light placeholder:tracking-wide" />
                                {errors.shortCode ? <p className="text-red-600 font-light text-sm">{JSON.stringify(errors.shortCode?.message)}</p> : null}

                            </div>

                        </div>
                    </div>
                    <div className="py-7 px-12 bg-white border-t shadow flex items-center justify-center">
                        <Button type="submit" variant={"outline"} disabled={isPending} className="w-full bg-slate-800 text-white hover:opacity-80 hover:bg-slate-800 hover:text-white transition-all disabled:bg-gray-400 flex items-center justify-center gap-3">
                            <>
                        
                                {
                                    isPending && (
                                        <Loader2 size={15} className="animate-spin"/>
                                    )
                                }
                                Create Link
                            </>
                        </Button>
                    </div>
                </form>
                <div className="flex flex-col justify-between w-full h-full ">
                    <div className="w-full flex flex-col h-full overflow-auto ">
                        <div className="border-b bg-white px-5 py-7 text-center flex items-center justify-center gap-3 h-fit  rounded-tl-lg sticky top-0 lg:static text-slate-800 text-lg">
                            <p className="font-semibold p-2">Social Preview</p>
                        </div>
                        <div className=" h-full overflow-auto flex flex-col gap-4 scrollbar-hide px-5 py-3 bg-white rounded-br-lg">
                            <div className="flex flex-col gap-2">
                                <Preview data={data} generatingMetatags={generatingMetatags} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export function useCreateLinkModal() {
    const [showCreateLinkModal, setShowCreateLinkModal] = useState<boolean>(false);

    const CreateModalCallback = useCallback(() => (       // return
        <CreateLinkModalCallback
            showCreateLinkModal={showCreateLinkModal}
            setShowCreateLinkModal={setShowCreateLinkModal}
        />
    ), [showCreateLinkModal, setShowCreateLinkModal])

    return useMemo(() => {
        return {
            showCreateLinkModal,
            CreateModalCallback,
            setShowCreateLinkModal,
        }
    }, [showCreateLinkModal, CreateModalCallback, setShowCreateLinkModal])
}