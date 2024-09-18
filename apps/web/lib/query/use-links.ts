import { useMutation } from "@tanstack/react-query"
import {fetcher} from '@club/utils'


export const useLink=()=>{
    const {isPending , mutate , error} = useMutation({
        mutationFn: fetcher
    })

    return {
        mutate,
        isPending,
        error
    }
}