import type { Chatlog } from './../../types/chat'
import axios from 'axios'

export interface RetrieveChatlogReq {
  id: string
}

export type RetrieveChatlogResp = Chatlog

export const retrieve = async (variables: RetrieveChatlogReq): Promise<RetrieveChatlogResp> => {
  try {
    const response = await axios.get(`/chat/answer/chatlog/${variables.id}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to retrieve chat log')
  }
}
