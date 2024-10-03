export const getGeoData = async (ipAddress: string): Promise<{
    country: string;
    region: string;
}> => {

    const IP_API_URL = process.env.IP_URL as string
    const IP_KEY = process.env.IP_KEY as string
    const response = await fetch(`${IP_API_URL}?apiKey=${IP_KEY}&ipAddress=${ipAddress}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const {
        ip,
        location: {
            country,
            region
        }
    }: {
        ip: string,
        location: {
            country: string,
            region: string,
        }
    } = await response.json()

    return {
        country,
        region,
    }
}