import axios from 'axios'

export default defineNuxtPlugin(() => {
  try {
    const config = useRuntimeConfig()
    if (config.public.baseURL) {
      axios.defaults.baseURL = config.public.baseURL
    }
    axios.interceptors.request.use(
      function (config) {
        const auth_token = localStorage.getItem('@access_token') || localStorage.getItem('@refresh_token')
        config.headers.Authorization = `Bearer ${auth_token}`
        axios.defaults.headers.common.Authorization = `Bearer ${auth_token}`
        return config
      },
      function (error) {
        return Promise.reject(error)
      },
    )
  } catch (err) {
    navigateTo('/login')
  }
})
