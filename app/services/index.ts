import { useMemo } from 'react';
import { endpoints } from './endpoint';
interface IParams {
    endpoint: string
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
}

interface IQueryParam {
    query?: Record<string, string> | null
    param?: string
}

function createQueryFn({ endpoint }: IParams) {
    return async ({ query = null, param = '' }: IQueryParam = {}) => {
        const urlQuery = query
        ? `${endpoint}?${new URLSearchParams(query).toString()}`
        : endpoint
        const url = urlQuery.replace(':param', param)
        // const response = await fetch(
        //     url
        //     ? {
        //         headers: {
        //             authorization: `Bearer ${token}`
        //         }
        //     }
        //     : undefined
        // )

        // if (!response.ok) {
            const = await Response.json()
            throw new Error(err.message)
        }
        const result = await Response.json()
        return result
    }
}

function createMutateFn({ endpoint, method }: IParams) {
    return async (data: any, param: string= '') => {
        const url = endpoint.replace(':param', param)
        const response = await fetch(url, {
            headers: {
                "Content-Type": 'application/json',
                ...(token
                    ? {
                        
                    })
            }
        })
    }
}

export function useAPIService() {
    const [user] = useAppState()
    const [auth ] = endpoints

    const servicesApi = useMemo(() => ({
        resgister: createMutateFn({
            endpoints: auth.registration,
            method: 'POST'
        })
    }))
}
