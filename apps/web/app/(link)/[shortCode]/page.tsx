import { notFound, redirect } from "next/navigation";

export default async function Page({
    params: {
        shortCode
    },
}: {
    params: {
        shortCode: string
    },
}) {
    const DOMAIN = "https://club.yashstack.com"
    const response = await fetch(`${DOMAIN}/api/links/${shortCode}`);
    const data = await response.json()

    if (response.status === 404 || typeof data.url === "undefined") {
        notFound()
    }
    else {
        return redirect(data.url)
    }
}