interface ReactQueryError extends Error {
    status: number
}
export const fetcher=async({
    init,
    input
}:{
    input: RequestInfo,
    init: RequestInit
})=>{
    const response = await fetch(input , init)
    if(!response.ok){
        const error = await response.text();
        console.log('error grabbed in fetcher : ' , error);
        const err = new Error(error) as ReactQueryError;
        err.status = response.status

        throw err;
    }

    return response.json();
}