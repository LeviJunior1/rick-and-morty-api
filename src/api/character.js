import api from '@/api/service'
export const getCharacter = params => api.get(`character/?page=${params}`)
