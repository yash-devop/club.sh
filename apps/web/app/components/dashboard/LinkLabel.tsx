import { Label, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@club/ui";
import { HelpCircle } from "lucide-react";
import React from "react";

export default function LinkLabel({
    label,
    logo,
    additional,
    additionalContent,
    labelDescription
}: {
    label: string,
    labelDescription: string
    logo: JSX.Element,
    additional?: string | JSX.Element,
    additionalContent?: string,
}) {
    return (
        <>

            <div className="flex items-center justify-between w-full ">
                <div className="space-x-2 flex items-center">
                    <Label className="text-slate-700">{label}</Label>
                    <Tooltip>
                        <TooltipTrigger className="text-gray-400">
                            {logo}
                        </TooltipTrigger>
                        <TooltipContent align="center" className="z-[1000]">
                            <p className="text-wrap max-w-sm text-center">{labelDescription}</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                {
                    typeof additional === "string" ? <p>{additional}</p> : null
                }
                {
                    (React.isValidElement(additional) && typeof additional.type) ? (
                        <>
                            <div>
                                <Tooltip>
                                    <TooltipTrigger className="text-slate-700 flex items-center">
                                        {additional}
                                    </TooltipTrigger>
                                    {
                                        additionalContent && (
                                            <TooltipContent>
                                                {additionalContent}
                                            </TooltipContent>
                                        )
                                    }
                                </Tooltip>
                            </div>
                        </>
                    ) : null
                }
            </div>

        </>
    )
}