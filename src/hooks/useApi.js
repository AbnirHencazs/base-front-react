import axios from 'axios'

const useApi = () => {
    const service = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
            'apikey': process.env.REACT_APP_API_KEY,
            'platform': 'web'
        }
    })

    service.interceptors.response.use( function (response) {
        return response.data
    } )

    return service
}

export default useApi