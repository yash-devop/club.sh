import LinkCard from "./LinkCard";

// do api calls here using server actions or normal SSR api call ( can also use React Query for better api calling and caching calls. ).
export default function LinksContainer(){
    return (
        <>
            <div className="flex flex-col gap-4">
                <LinkCard />
                <LinkCard />
                <LinkCard />
            </div>
        </>
    )
}