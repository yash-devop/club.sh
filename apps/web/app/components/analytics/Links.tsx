'use client'

import React, { useState } from "react";
import { AnalyticsLinksCard } from "./AnalyticsLinksCard";
type LinksType = "links"
export default function Links() {
    const [tab, setTab] = useState<LinksType>("links")
    return (
        <>
            <div className="relative">
                <div className="flex items-center gap-4 relative py-3">
                    <AnalyticsLinksCard
                        tabs={[
                            {
                                id: "links",
                                name: "Links"
                            },
                        ]}
                        selectedTabId={tab}
                        onSelectTab={setTab}
                    />
                </div>
            </div>
        </>
    )
}