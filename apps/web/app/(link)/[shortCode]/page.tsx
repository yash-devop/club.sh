import { getUserAgent } from "@club/utils";
import { Metadata } from "next"
import { headers } from "next/headers";             // i used headers from nextjs because to pass it to the ServerComponent... ( not possible to grab req in params just like we do in Route.ts )
import { notFound, redirect } from "next/navigation";

// export async function generateMetadata({
//     params: { shortCode },
// }: {
//     params: {
//         shortCode: string
//     }
// }): Promise<Metadata> {

//     const response = await fetch(`http://localhost:3000/api/links/${shortCode}`);
//     const data: {
//         url: {
//             title: string,
//             description: string,
//             image: string
//         }

//     } = await response.json()
//     if (response.status === 404 || typeof data.url === "undefined") {
//         return {
//             title: "Undefined"
//         }
//     }
//     return {
//         title: data.url.title,
//         description: data.url.description,
//         twitter: {
//             images: [{
//                 url: data.url.image
//             }]
//         }
//     }
// }
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