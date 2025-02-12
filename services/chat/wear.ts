export interface AnswerReq {
  conversation_id: string
  question: string
  stream: boolean
}

export const wear = async (variables: AnswerReq): Promise<ReadableStream<Uint8Array>> => {
  const config = useRuntimeConfig()
  const controller = new AbortController()
  const access_token = localStorage.getItem('@access_token')
  try {
    const response = await fetch(`${config.public.baseURL}/chat/answer/wear`, {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${access_token}`,
        Connection: 'keep-alive',
      },
      body: JSON.stringify(variables),
    })
    if (response?.body === null) {
      throw new Error('Failed to answer')
    }
    return response.body
  } catch (error) {
    throw new Error('Failed to asnwer')
  }
}
