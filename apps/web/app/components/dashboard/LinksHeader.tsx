"use client"

import { Button } from "@club/ui";
import { useCreateLinkModal } from "../modals/create-link-modal";
import { useQueryClient } from "@tanstack/react-query";
import SearchBox from "./SearchBox";
import { useMediaQuery } from 'react-responsive';
import { useCallback, useEffect, useState } from "react";

export default function LinksHeader() {
    const { CreateModalCallback, setShowCreateLinkModal } = useCreateLinkModal();
    const queryClient = useQueryClient();
    const handleLinkCreated = () => {
        queryClient.invalidateQueries({
            queryKey: ["links"]
        });
    }

    const isTabletOrMobile = useMediaQuery({
        query: "(min-width:700px)"
    });

    const [showSearchBar, setShowSearchBar] = useState(true);

    useEffect(() => {
        setShowSearchBar(isTabletOrMobile);
    }, [isTabletOrMobile]);

    const renderSearchBar = useCallback(() => {
        return <SearchBox />;
    }, []);

    return (
        <>
            <div className="flex flex-col pb-4">
                <div className="flex items-center justify-between pb-3">
                    <p className="font-medium text-2xl tracking-tight pl-3 md:p-0">Links</p>
                    <div className="flex items-center gap-3">
                        {showSearchBar && renderSearchBar()}
                        <Button className="transition-all hover:outline outline-slate-300 outline-offset-[0.5px]" onClick={() => setShowCreateLinkModal(true)}>
                            <p>Create Link C</p>
                        </Button>
                    </div>
                    <CreateModalCallback invalidateLinks={handleLinkCreated} />
                </div>
                {!showSearchBar && renderSearchBar()}
            </div>
        </>
    );
}
