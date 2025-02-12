import { login, type LoginReq } from './login'
import { refreshToken } from './authServices'

type UseAuthApi = () => {
  login: (variables: LoginReq) => Promise<{ access_token: string; refresh_token: string }>
  refreshToken: (refreshToken: string) => Promise<[access_token: string, refresh_token: string]>
}

export const useAuthApi: UseAuthApi = () => {
  return {
    login: async (variables) => {
      return await login(variables)
    },
    refreshToken: async (variables) => {
      return await refreshToken(variables)
    },
  }
}
