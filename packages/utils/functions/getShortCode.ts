import {hashString} from './hash-string'

export const getShortCode=(str = "")=>{
    const hashedString = hashString(str)

    const base64Hash = btoa(hashedString);     // AjYyY2M0NzAzMGIxODAzMDY0ODQ0Yjk0YzFjYjAwNTRhNRe3ZDFlNTUwZTI2YmIzM2YyMTUxNDlkOGIyYzcyZQ==

    const cleanedString = base64Hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');            //regex to cleanup + , / , ==

    const truncatedStr = cleanedString.substring(0, 7);

    return truncatedStr
}