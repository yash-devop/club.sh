"use client"

import React, { useState } from "react";
import { AnalyticsCountryCard } from "./AnalyticsCountryCard";

type CountryType = "country"

export default function Country() {
    const [tab, setTab] = useState<CountryType>("country")


    return (
        <>
            <div className="relative">
                <div className="flex items-center gap-4 relative py-3">
                    <AnalyticsCountryCard
                        tabs={[
                            {
                                id: "country",
                                name: "Countries"
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