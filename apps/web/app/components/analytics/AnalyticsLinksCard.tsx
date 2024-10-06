"use client"

import { MousePointerClick } from "lucide-react";
import Tabs from "./Tabs";

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
                {
                    activeTab?.id === "links" ? (
                        <p>Data</p>
                    ) : null
                }
            </div>
        </div>
    );
}
