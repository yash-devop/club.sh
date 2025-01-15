import { headers } from "next/headers";             // i used headers from nextjs because to pass it to the ServerComponent... ( not possible to grab req in params just like we do in Route.ts )
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


    const response = await fetch(`http://localhost:3000/api/links/${shortCode}`, {
        headers: headers()
    });
    const data = await response.json()

    if (response.status === 404 || typeof data.url === "undefined") {
        notFound()
    }
    else {
        return redirect(data.url)
    }
}