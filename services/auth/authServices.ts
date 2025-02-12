import axios from 'axios'

export const refreshToken = async (refreshToken: string): Promise<[access_token: string, refresh_token: string]> => {
  // const refreshToken = localStorage.getItem('@refresh_token')
  // if (!refreshToken) {
  //   throw new Error('No refresh token available')
  // }
  try {
    const response = await axios.post('/auth/refresh-token', { refresh_token: refreshToken })
    console.log(response)
    const { access_token } = response.data
    localStorage.setItem('@access_token', access_token)
    return response.data
  } catch (error) {
    throw new Error('Failed to refresh access token')
  }
}
