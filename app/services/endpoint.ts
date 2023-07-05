export const BASE_URL = "10.1.29.182"

function createEndpointUrl(endpoint: string) {
    return `${BASE_URL}/${endpoint}`
}

export const endpoints = {
    auth: {
        register: createEndpointUrl('register')
    }
}
