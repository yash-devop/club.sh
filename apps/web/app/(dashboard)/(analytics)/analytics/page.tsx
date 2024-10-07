import React from "react";
import Country from "@/app/components/analytics/Country";
import Devices from "@/app/components/analytics/Devices";
import Referrer from "@/app/components/analytics/Referrer";
import Links from "@/app/components/analytics/Links";

export default function AnalyticsPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            <Links />
            <Country />
            <Devices />
            <Referrer />
        </div>
    );
}
