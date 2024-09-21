import { CreateLinkProps } from "@/lib/types"
import { cn, Facebook, LinkedIn, Twitter } from "@club/ui"
import { Image as Gallery, Loader2 } from "lucide-react"
import Image from 'next/image'

const Loader = () => {
    return <Loader2 size={15} className="animate-spin" />
}


const SkeletonBar = ({
    className
}: {
    className?: string
}) => {
    return (
        <>
            <div className={cn(`py-2 rounded-full w-full bg-gray-200`, className)} />
        </>
    )
}
const PreviewHeader = ({
    name,
    logo
}: {
    name: string
    logo: JSX.Element
}) => {
    return (
        <>
            <div className="flex items-center justify-center gap-5">
                <div className="flex-1 border-t border-gray-200" />
                <div className="flex items-center gap-2">
                    {logo}
                    <span className="text-sm text-gray-400 font-light">{name}</span>
                </div>
                <div className="flex-1 border-t border-gray-200" />
            </div>
        </>
    )
}

export const TwitterCard = ({
    title,
    image,
    description,
    generatingMetaTags
}: {
    image: string,
    title: string,
    description: string,
    generatingMetaTags: boolean
}) => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <PreviewHeader logo={<Twitter className="size-3" />} name="Twitter" />
                {
                    generatingMetaTags ? <div className="relative bg-gray-100 w-full rounded-2xl border border-gray-300 h-[240px] flex items-center justify-center">
                        <Loader />
                    </div> : image ? (
                        <>
                            <div className="relative bg-gray-100 w-full rounded-2xl border border-gray-300 h-[240px] flex items-center justify-center overflow-hidden">
                                <Image src={image} alt="testing" width={40} height={40} className="object-cover w-full h-full" unoptimized />
                                <div className="absolute bg-black/70 bottom-2 left-2 rounded-lg text-white text-xs px-2.5 py-0.5 font-light">
                                    <p>{title}</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="relative bg-gray-100 w-full rounded-2xl border border-gray-300 h-[240px] flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                    <Gallery size={35} />
                                    <span className="text-sm">Enter a link to generate a Preview</span>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export const FacebookCard = ({
    title,
    image,
    description,
    generatingMetaTags
}: {
    image: string,
    title: string,
    description: string,
    generatingMetaTags: boolean
}) => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <PreviewHeader logo={<Facebook className="size-4" />} name="Facebook" />

                {generatingMetaTags ? <div className="relative bg-gray-100 w-full rounded-2xl border border-gray-300 h-[240px] flex items-center justify-center">
                    <Loader />
                </div> : image ? (
                    <>
                        <div>
                            <div className="bg-gray-100 w-full  border border-gray-300 h-[280px] flex items-center justify-center">
                                <Image src={image} alt="testing" width={40} height={40} className="object-cover w-full h-full" unoptimized />
                            </div>
                            <div className="bg-gray-100 border-b border-l border-r border-gray-300 p-3 space-y-1">
                                <p className="font-light text-xs uppercase text-slate-400">youtube.com</p>
                                <p className="font-semibold text-sm">https://www.youtube.com/watch?v=jt5bqO_r2DQ</p>
                                <p className="font-light text-sm">No description</p>
                            </div>
                        </div>

                    </>
                ) : (
                    <>
                        <div>
                            <div className="bg-gray-100 w-full  border border-gray-300 h-[280px] flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                    <Gallery size={35} />
                                    <span className="text-sm">Enter a link to generate a Preview</span>
                                </div>
                            </div>
                            <div className="bg-gray-100 border-b border-l border-r border-gray-300 p-3 space-y-1">
                                <SkeletonBar className="max-w-[100px] w-full" />
                                <SkeletonBar />
                                <SkeletonBar />
                                <SkeletonBar className="max-w-[200px] w-full" />
                            </div>
                        </div>
                    </>
                )
                }
            </div>
        </>
    )
}
export const LinkedInCard = ({
    title,
    image,
    description,
    generatingMetaTags
}: {
    image: string,
    title: string,
    description: string,
    generatingMetaTags: boolean
}) => {
    return (
        <>
            <div className="flex flex-col gap-3">
                <PreviewHeader logo={<LinkedIn className="size-4 text-blue-500" />} name="LinkedIn" />

                <div>
                    {
                        generatingMetaTags ? <div className="relative bg-gray-100 w-full rounded-2xl border border-gray-300 h-[240px] flex items-center justify-center">
                            < Loader />
                        </div> : image ? (
                            <>
                                <div>
                                    <div className="bg-gray-100 w-full  border border-gray-300 h-[280px] flex items-center justify-center">
                                        <Image src={image} alt="testing" width={40} height={40} className="object-cover w-full h-full" unoptimized />
                                    </div>
                                    <div className="bg-gray-100 border-b border-l border-r border-gray-300 p-3 space-y-1">
                                        <p className="font-semibold text-sm">https://www.youtube.com/watch?v=jt5bqO_r2DQ</p>
                                        <p className="font-light text-sm">No description</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="bg-gray-100 w-full  border border-gray-300 h-[280px] flex items-center justify-center">
                                    <div className="flex flex-col items-center justify-center gap-4 text-gray-400">
                                        <Gallery size={35} />
                                        <span className="text-sm">Enter a link to generate a Preview</span>
                                    </div>
                                </div>
                                <div className="bg-gray-100 border-b border-l border-r border-gray-300 p-3 space-y-1">
                                    <SkeletonBar />
                                    <SkeletonBar className="max-w-[150px]" />
                                </div>
                            </>
                        )
                    }
                </div>
            </div >
        </>
    )
}

export default function Preview({
    data,
    generatingMetatags
}: {
    data: CreateLinkProps,
    generatingMetatags: boolean
}) {

    return (
        <>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <TwitterCard
                        generatingMetaTags={generatingMetatags}
                        image={data.image!}
                        title={data.title!}
                        description={data.description!}
                    />
                    <FacebookCard
                        generatingMetaTags={generatingMetatags}
                        image={data.image!}
                        title={data.title!}
                        description={data.description!}
                    />
                    <LinkedInCard
                        generatingMetaTags={generatingMetatags}
                        image={data.image!}
                        title={data.title!}
                        description={data.description!}
                    />
                </div>
            </div>
        </>
    )
}