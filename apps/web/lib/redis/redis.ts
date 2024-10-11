import Redis from "ioredis";

export const getRedisUrl=()=>{
    if(process.env.UPSTASH_REDIS_URL){          //note: all envs are available on server side and not in client... u have to explicitly mention to expose it.
        return process.env.UPSTASH_REDIS_URL
    }
    throw new Error("UPSTASH_REDIS_URL is not defined")
}

export const redis = new Redis(getRedisUrl())