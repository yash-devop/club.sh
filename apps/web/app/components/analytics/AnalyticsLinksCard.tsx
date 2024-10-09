"use client"

import { MousePointerClick } from "lucide-react";
import Tabs from "./Tabs";
import { fetcher } from "@club/utils";
import { useQuery } from "@tanstack/react-query";
import { BarList } from "./BarList";

type LinkResponse = {
    links: {
        url: string;
        clicks: number;
    }[]
}

export function AnalyticsLinksCard<T extends string>({
    tabs,
    selectedTabId,
    onSelectTab
}: {
    tabs: {
        id: T,
        name: string
    }[],
    selectedTabId: T,
    onSelectTab: React.Dispatch<React.SetStateAction<T>>
}) {
    const activeTab = tabs.find((tab) => tab.id === selectedTabId);
    const {
        data: linksData,
        isFetching,
        error,
        isError
    } = useQuery<LinkResponse>({
        queryKey: ['links_clicks'],
        queryFn: () => {
            return fetcher({
                input: '/api/analytics/clicks',
                init: {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            })
        },
        staleTime: 1000 * 300
    })
    const maxCount = linksData?.links?.length ? Math.max(...linksData.links.map((link) => link.clicks)) : 0;

    return (
        <div className="border bg-white min-h-[400px] max-h-[400px] w-full h-full rounded-xl overflow-auto relative">
            {
                (
                    <>
                        <div className="flex items-center justify-between border-b px-4 bg-white sticky top-0 right-0 left-0">
                            <Tabs
                                options={tabs}
                                selected={selectedTabId}
                                onSelect={onSelectTab}
                            />
                            <div className="flex items-center gap-1">
                                <MousePointerClick size={15} className="text-slate-600" />
                                <p className="font-light text-xs text-slate-400">CLICKS</p>
                            </div>
                        </div>
                        <div className="flex flex-col px-5 py-4 overflow-auto">
                            {
                                isFetching ? (
                                    <>
                                        <div className="flex items-center justify-center w-full py-32 text-sm text-neutral-400 font-light">
                                            <p>Loading...</p>
                                        </div>
                                    </>
                                ) :
                                    activeTab?.id === "links" ? (
                                        linksData && linksData.links.length > 0 ? (
                                            <BarList data={linksData.links} countKey="clicks" maxCount={maxCount} nameKey="url" />
                                        ) : (
                                            <div className="flex items-center justify-center w-full py-32 text-sm text-neutral-400 font-light">
                                                <p>No data available</p>
                                            </div>
                                        )
                                    ) : null
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
}
