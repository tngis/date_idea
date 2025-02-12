import { defineStore } from 'pinia'

interface question {
  id: number
  text: string
  answers: { type: string; items: Array<string> }
  correct_answer: string
  selected: string | null
}

interface QuestionStoreState {
  questions: Array<question>
}

export const useQuestionStore = defineStore('global', {
  state: (): QuestionStoreState => ({
    questions: [
      {
        id: 1,
        text: 'Тэнгисийн хамгийн дуртай зураг',
        answers: {
          type: 'photo',
          items: ['/IMG_4969.jpg', '/IMG_4974.jpg', '/IMG_4972.jpg', '/IMG_4973.jpg'],
        },
        correct_answer: '/IMG_4972.jpg',
        selected: null,
      },
      {
        id: 2,
        text: 'Тэнгисийн хамгийн дуртай хамтлаг',
        answers: {
          type: 'text',
          items: ['Newjeans', 'Twice', 'Blackpink', 'Le sserafim'],
        },

        correct_answer: 'Twice',
        selected: null,
      },
      {
        id: 3,
        text: 'Тэнгисийн хамгийн сонсох дуртай үг',
        answers: {
          type: 'text',
          items: ['Unjii🤍', 'Hairaa🤍', 'Minii saihan zaluu💗', 'Medkue'],
        },
        correct_answer: 'Minii saihan zaluu💗',
        selected: null,
      },
      {
        id: 4,
        text: 'Тэнгисийн хамгийн дуртай уух зүйл',
        answers: {
          type: 'text',
          items: ['Кофэ', 'Кола', 'Ус', 'Сүүтэй цай'],
        },
        correct_answer: 'Сүүтэй цай',
        selected: null,
      },
      {
        id: 5,
        text: 'Тэнгисийн хамгийн идэх дуртай хоол',
        answers: {
          type: 'text',
          items: ['Цуйван', 'Кимчи жигэ', 'Будаатай хуурга', 'Гуляш'],
        },
        correct_answer: 'Кимчи жигэ',
        selected: null,
      },
    ],
  }),
})
