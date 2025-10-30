import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getAuthToken } from './auth'
import { isTokenExpired } from './tokenUtils'

let isRefreshing = false
interface QueueItem {
  resolve: (value?: string | null) => void
  reject: (error?: Error) => void
}

let failedQueue: QueueItem[] = []

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error)
    } else {
      resolve(token)
    }
  })

  failedQueue = []
}

export const setupApiInterceptors = (refreshTokenFn: () => Promise<void>, logoutFn: () => void) => {
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getAuthToken()
      if (token && !isTokenExpired(token)) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    error => Promise.reject(error),
  )

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    async error => {
      const originalRequest = error.config

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject })
          })
            .then(() => {
              const token = getAuthToken()
              originalRequest.headers.Authorization = `Bearer ${token}`
              return axios(originalRequest)
            })
            .catch(err => Promise.reject(err))
        }

        originalRequest._retry = true
        isRefreshing = true

        try {
          await refreshTokenFn()
          processQueue(null)

          const token = getAuthToken()
          originalRequest.headers.Authorization = `Bearer ${token}`
          return axios(originalRequest)
        } catch (refreshError) {
          processQueue(refreshError)
          logoutFn()
          return Promise.reject(refreshError)
        } finally {
          isRefreshing = false
        }
      }

      return Promise.reject(error)
    },
  )
}
