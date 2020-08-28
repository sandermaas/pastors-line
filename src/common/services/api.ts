import axios from 'axios'

const baseUrl = 'https://api.dev.pastorsline.com/api'
const baseParams = {
    companyId: 171
}

export const api = {
    get: (path: string, params?: Object) => {
        return axios({
            method: 'GET',
            url: baseUrl + path,
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'
            },
            params: {
                ...baseParams,
                ...params
            }
        }).then(response => {
            return response.data
        }).catch(error => {
            throw error
        })
    }
}