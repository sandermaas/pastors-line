import axios from 'axios'

const baseUrl = 'https://api.dev.pastorsline.com/api'

export const api = {
    get: (path: string) => {
        return axios.get(baseUrl + path)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error
            })
    }
}