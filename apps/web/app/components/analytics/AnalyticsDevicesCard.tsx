"use client";

import { MousePointerClick } from "lucide-react";
import Tabs from "./Tabs";
import { getDevicesTB } from "@/lib/tinybird/pipes";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@club/utils";
import Bar from "./Bar";
import { BarList } from "./BarList";


type DevicesResponse = {
    devices: {
        device: string,
        clicks: number
    }[]
}
type BrowsersResponse = {
    browsers: {
        clicks: number;
        browser: string;
    }[]
}
type OSResponse = {
    os: {
        os: string;
        clicks: number;
    }[]
}
export function AnalyticsDevicesCard<T extends string>({
    tabs,
    selectedTabId,
    onSelectTab,
}: {
    tabs: { id: T; name: string }[];
    selectedTabId: T;
    onSelectTab: React.Dispatch<React.SetStateAction<T>>;
}) {
    const activeTab = tabs.find((tab) => tab.id === selectedTabId);

    const {
        data: deviceData,
        isFetching,
        error,
        isError
    } = useQuery<DevicesResponse>({
        queryKey: ['devices_clicks'],
        queryFn: () => {
            return fetcher({
                input: '/api/analytics/devices?event=device',
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
    const {
        data: browserData
    } = useQuery<BrowsersResponse>({
        queryKey: ['browsers_clicks'],
        queryFn: () => {
            return fetcher({
                input: '/api/analytics/devices?event=browser',
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
    const {
        data: osData
    } = useQuery<OSResponse>({
        queryKey: ['os_clicks'],
        queryFn: () => {
            return fetcher({
                input: '/api/analytics/devices?event=os',
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
    const maxCount =
        deviceData?.devices?.length ? Math.max(...deviceData.devices.map((device) => device.clicks))
            : browserData?.browsers?.length ? Math.max(...browserData.browsers.map((browser) => browser.clicks))
                : osData?.os.length ? Math.max(...osData.os.map((os) => os.clicks))
                    : 0

    return (
        <div className="border bg-white min-h-[400px] max-h-[400px] w-full h-full rounded-xl overflow-auto relative">
            <div className="flex items-center justify-between border-b px-4 bg-white sticky top-0 right-0 left-0">
                <Tabs options={tabs} selected={selectedTabId} onSelect={onSelectTab} />
                <div className="flex items-center gap-1">
                    <MousePointerClick size={15} className="text-slate-600" />
                    <p className="font-light text-xs text-slate-400">CLICKS</p>
                </div>
            </div>
            <div className="flex flex-col px-5 py-4">
                {activeTab?.id === "devices" ? (
                    deviceData && deviceData.devices.length > 0 ? (
                        <BarList data={deviceData.devices} countKey="clicks" maxCount={maxCount} nameKey="device" />
                    ) : (
                        <div className="flex items-center justify-center w-full py-32 text-sm text-neutral-400 font-light">
                            <p>No data available</p>
                        </div>
                    )
                ) : activeTab?.id === "browser" ? (
                    browserData && browserData.browsers.length > 0 ? (
                        <BarList data={browserData.browsers} countKey="clicks" maxCount={maxCount} nameKey="browser" />
                    ) : (
                        <div className="flex items-center justify-center w-full py-32 text-sm text-neutral-400 font-light">
                            <p>No data available</p>
                        </div>
                    )
                ) : activeTab?.id === "os" ? (
                    osData && osData.os.length > 0 ? (
                        <BarList data={osData.os} countKey="clicks" maxCount={maxCount} nameKey="os" />
                    ) : (
                        <div className="flex items-center justify-center w-full py-32 text-sm text-neutral-400 font-light">
                            <p>No data available</p>
                        </div>
                    )
                ) : <div className="flex items-center justify-center w-full py-32 text-sm text-neutral-400 font-light">
                    <p>Invalid Tab Selected.</p>
                </div>
                }
            </div>
        </div>
    );
}
