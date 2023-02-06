import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getDogs = () => api.get('/dogs')
export const getCats = () => api.get('/cats')

export default api
