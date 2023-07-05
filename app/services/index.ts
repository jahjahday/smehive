import { endpoints } from "./endpoint";

export const register = (data : Record<string, string>, endpoint: string) => {
    const res = fetch(endpoint, {
        body: JSON.stringify(data)
        method: GET
    })

        if (!res.ok {
            throw new Error("Failed")
        }
        return res.json()
    })
}
