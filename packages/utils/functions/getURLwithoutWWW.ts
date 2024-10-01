export const getUrlwithoutWWW=(url:string):string=>{
    if(url.includes("www")){
        const newUrl = url.split("/").slice(2).join("").split("www.").join("")

        return newUrl
    }
    return "";
}