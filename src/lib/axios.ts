import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    if (env.VITE_ENABLE_API_DELAY) {
      await new Promise((resolve) =>
        setTimeout(
          resolve,
          env.VITE_ENABLE_RANDOM_API_DELAY
            ? Math.round(Math.random() * env.VITE_API_DELAY)
            : env.VITE_API_DELAY,
        ),
      )
    }
    return config
  })
}
