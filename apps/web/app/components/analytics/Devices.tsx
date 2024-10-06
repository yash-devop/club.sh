"use client"

import { cn } from "@club/ui"
import React, { useState } from "react"
import { AnalyticsLinksCard } from "./AnalyticsLinksCard"
import { AnalyticsDevicesCard } from "./AnalyticsDevicesCard"

type DevicesType = "devices" | "browser" | "os"

export default function Devices() {
    const [tab,  setTab] = useState<DevicesType>("devices")
    return (
        <>
            <div className="relative">
                <div className="flex items-center gap-4 relative py-3">
                    <AnalyticsDevicesCard
                        tabs={[
                            {
                                id: "devices",
                                name: "Devices"
                            },
                            {
                                id: "browser",
                                name: "Browsers"
                            },
                            {
                                id: "os",
                                name: "OS"
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