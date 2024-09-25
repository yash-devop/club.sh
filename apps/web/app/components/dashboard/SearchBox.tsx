"use client"
import { Input } from "@club/ui";
import { Search } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function SearchBox() {
    const searchParams = useSearchParams()
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500)
    const { replace } = useRouter();   // https://nextjs.org/docs/app/api-reference/functions/use-router
    const pathname = usePathname();

    const updateSearchParams = useCallback(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (!debouncedSearchTerm) {
            params.delete("search");
        } else {
            params.set("search", debouncedSearchTerm);
        }
        replace(`${pathname}?${params.toString()}`);
    }, [debouncedSearchTerm, pathname, replace, searchParams]);

    useEffect(() => {
        updateSearchParams();
    }, [updateSearchParams]);

    return (
        <>
            <div className="relative">
                <Input onChange={(e) => setSearchTerm(e.target.value)} defaultValue={searchParams.get("search")?.toString()} type="search" placeholder="Search Links..." className="flex-1 pl-10 placeholder:text-gray-400 transition-all  outline-slate-300 outline-offset-[0.5px]" />
                <Search className="absolute top-3 left-3 text-gray-400" size={18} />
            </div>
        </>
    )
}