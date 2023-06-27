export const BASE_URL = "base url"

function createEndpointUrl(endpoint: string) {
    return `${BASE_URL}/${endpoint}`
}

export const endpoints = {
    auth: {
        register: createEndpointUrl('register')
    }
}
