import { isValidJwt } from '~/middleware/auth'

export const idToken = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('@access_token')
    if (token) {
      const jwtValidation = isValidJwt(token)
      if (!jwtValidation) {
        localStorage.removeItem('@access_token')
        navigateTo('/login')
        reject(new Error('Token Expired!'))
        return
      }
      resolve(token)
    } else {
      navigateTo('/login')
      reject(new Error('User is not authenticated'))
    }
  })
}
