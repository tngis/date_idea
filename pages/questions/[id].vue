<script lang="ts" setup>
import { useQuestionStore } from '@/store/questions'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const questionStore = useQuestionStore()
const { questions } = storeToRefs(questionStore)
const route = useRoute()

const index = Number(route.params.id) - 1
const question = questions.value[index]

// Add a ref to store the user's selected answer

const nextQuestion = () => {
  if (questions.value[index].selected) {
    navigateTo(`/questions/${Number(route.params.id) + 1}`)
  }
}
const previous = () => {
  if (Number(route.params.id) > 1) {
    navigateTo(`/questions/${Number(route.params.id) - 1}`)
  }
}

const check = (item: string) => {
  if (!questions.value[index].selected) {
    questions.value[index].selected = item
  }
}

const photoBorder = (item: string) => {
  if (questions.value[index].selected) {
    if (item === question.correct_answer) {
      return 'border-4 border-green-300'
    } else if (item === questions.value[index].selected) {
      return 'border-4 border-red-400'
    }
  }
  return ''
}

const textBorder = (item: string) => {
  if (questions.value[index].selected) {
    if (item === question.correct_answer) {
      return ' bg-green-400'
    } else if (item === questions.value[index].selected) {
      return 'bg-red-400'
    }
  }
  return ''
}

const finish = () => {
  if (questions.value[index].selected) {
    navigateTo('/congrats')
  }
}
</script>
<template>
  <div class="flex h-screen w-full flex-col justify-between p-4">
    <div class="mt-8 flex items-center justify-between text-xl">
      <Icon @click="previous" class="h-8 w-8" icon="tabler:arrow-left" />
      <div>Асуулт {{ question.id }}</div>
      <Icon @click="nextQuestion" class="h-8 w-8" icon="tabler:arrow-right" />
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex justify-center">{{ question.text }}</div>
      <div v-if="question.answers.type === 'photo'" class="grid grid-cols-2 gap-2">
        <div @click="check(item)" v-for="item in question.answers.items" :key="item" :class="['overflow-hidden rounded-lg', photoBorder(item)]">
          <img :src="item" alt="" />
        </div>
      </div>
      <div v-if="question.answers.type === 'text'" class="flex w-full flex-col space-y-2">
        <div
          v-for="item in question.answers.items"
          :key="item"
          @click="check(item)"
          :class="['w-full rounded-lg border border-border py-2 text-center', textBorder(item)]"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div v-if="questions.length !== question.id" @click="nextQuestion" class="w-full">
      <Button :disabled="!questions[index].selected" class="w-full">Дараагийн асуулт</Button>
    </div>
    <div v-else @click="finish"><Button :disabled="!questions[index].selected" class="w-full">Дуусгах</Button></div>
  </div>
</template>
