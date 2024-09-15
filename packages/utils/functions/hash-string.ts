import {createHash , randomBytes} from 'node:crypto';


export function hashString(str: string){
    const hash = createHash("sha256")          //sha256 algo.
    const salt = randomBytes(10).toString("hex")
    hash.update(str + salt);
    const hashedString = hash.digest("hex")

    console.log('hashed :' , hashedString);

    return hashedString;
}