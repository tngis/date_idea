import { wear, type AnswerReq } from './wear'
import { reservation } from './reservation'
import { retrieve, type RetrieveChatlogReq, type RetrieveChatlogResp } from './retrieve-chatlog'

type UseChatApi = () => {
  reservationAnswer: (variables: AnswerReq) => Promise<ReadableStream<Uint8Array>>
  wearAnswer: (variables: AnswerReq) => Promise<ReadableStream<Uint8Array>>
  retrieve: (variables: RetrieveChatlogReq) => Promise<RetrieveChatlogResp>
}

export const useChatApi: UseChatApi = () => {
  return {
    reservationAnswer: async (variables) => {
      return await reservation(variables)
    },
    wearAnswer: async (variables) => {
      return await wear(variables)
    },
    retrieve: async (variables) => {
      return await retrieve(variables)
    },
  }
}
