"use client"

import React, { useState } from "react";
import { AnalyticsReferrerCard } from "./AnalyticsReferrerCard";

type ReferrerType = "referrer"
export default function Referrer(){
    const [tab,  setTab] = useState<ReferrerType>("referrer")
    return (
        <>
            <div className="relative">
                <div className="flex items-center gap-4 relative py-3">
                    <AnalyticsReferrerCard 
                        tabs={[
                            {
                                id: "referrer",
                                name: "Referrers"
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