"use client"

import { MousePointerClick } from "lucide-react";
import Tabs from "./Tabs";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@club/utils";
import Bar from "./Bar";
import {BarList} from "./BarList";

type CountryResponse = {
    countries: {
        country: string;
        clicks: number;
    }[]
}

export function AnalyticsCountryCard<T extends string>({
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
        data: countryData,
        isFetching,
        error,
        isError
    } = useQuery<CountryResponse>({
        queryKey: ['country_clicks'],
        queryFn: () => {
            return fetcher({
                input: '/api/analytics/country',
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
    const maxCount = countryData?.countries?.length ? Math.max(...countryData.countries.map((country) => country.clicks)) : 0;

    return (
        <div className="border bg-white min-h-[400px] max-h-[400px] w-full h-full rounded-xl overflow-auto relative">
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
            <div className="flex flex-col px-5 py-4">
                {activeTab?.id === "country" ? (
                    countryData && countryData.countries.length > 0 ? (
                        <BarList data={countryData.countries} countKey="clicks" maxCount={maxCount} nameKey="country" />
                    ) : (
                        <div className="flex items-center justify-center w-full py-32 text-sm text-neutral-400 font-light">
                            <p>No data available</p>
                        </div>
                    )
                ) : (
                    <p>No Tab found.</p>
                )}
            </div>
        </div>
    );
}
