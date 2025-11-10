import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { getAuthToken } from '@/utils/auth'
import { isTokenExpired } from '@/utils/tokenUtils'

export const setupApiInterceptors = (logoutFn: () => void) => {
  // Request interceptor
  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAuthToken()
      if (token && !isTokenExpired(token)) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    error => Promise.reject(error),
  )

  // Response interceptor
  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    async error => {
      if (error.response?.status === 401) {
        logoutFn()
        return Promise.reject(new Error('Session expired. Please log in again.'))
      }

      return Promise.reject(error)
    },
  )
}
