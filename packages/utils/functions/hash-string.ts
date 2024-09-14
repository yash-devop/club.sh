import {createHash} from 'node:crypto'
export function hashString(str: string){
    const hash = createHash("sha256");          //sha256 algo.
    hash.update(str);

    const hashedString = hash.digest("hex")

    console.log('hashed :' , hashedString);

    return hashedString
}