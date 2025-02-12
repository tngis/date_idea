import axios from 'axios'

export interface LoginReq {
  username: string
  password: string
}

export const login = async (variables: LoginReq): Promise<{ access_token: string; refresh_token: string }> => {
  const formData = new FormData()
  formData.append('username', variables.username)
  formData.append('password', variables.password)
  try {
    const response = await axios.post('/auth/login', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (error) {
    console.error('Login error:', error)
    throw new Error('Incorrect username or password')
  }
}
