<script setup>
import { useQuestionStore } from '@/store/questions'
import { Icon } from '@iconify/vue'
import useConfetti from 'canvas-confetti'

const questionStore = useQuestionStore()
const { questions } = storeToRefs(questionStore)

function randomInRange(min, max) {
  return Math.random() * (max - min) + min
}

const correctAnswers = computed(() => {
  let correctCount = 0

  questions.value.forEach((question) => {
    if (question.selected === question.correct_answer) {
      correctCount++
    }
  })

  return correctCount
})

const triggerConfetti = () => {
  const duration = 5 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }
  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)
    // since particles fall down, start a bit higher than random
    useConfetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
    useConfetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  }, 250)
}

const triggerBasic = () => {
  useConfetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
}

const triggerSideConfetti = () => {
  const colors = ['#bb0000', '#0000ee']
  const end = Date.now() + 1000
  function frame() {
    useConfetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    })
    useConfetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }
  requestAnimationFrame(frame)
}

const triggerStarConfetti = () => {
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
  }

  function shoot() {
    useConfetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star'],
    })

    useConfetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle'],
    })
  }

  setTimeout(shoot, 0)
  setTimeout(shoot, 100)
  setTimeout(shoot, 200)
}

onMounted(() => {
  triggerConfetti()
  triggerBasic()
  triggerStarConfetti()
  setTimeout(() => {
    triggerSideConfetti()
  }, 5000)
})
</script>
<template>
  <div class="flex h-screen w-full flex-col items-center justify-center gap-4 bg-primary p-4 text-white">
    <div class="my-4 text-xl font-bold">Таньд баяр хүгрэе!</div>
    <div class="text-center text-lg">
      Та {{ correctAnswers }} асуултанд зөв хариулсанаар шалгалтанд амжилттай тэнцэж энэ сайхан залуутай болзоонд явах эрх хожлоо
    </div>
    <div class="overflow-hidden rounded-xl">
      <img src="/IMG_4979.jpg" alt="" />
    </div>
    <div>
      <div class="flex gap-2 font-semibold"><Icon icon="tabler:map-pin" class="h-5 w-5 text-white" /> <span>2 сарын 14 ний өглөө 8 цагт</span></div>
      <div class="flex gap-2 font-semibold"><Icon icon="tabler:calendar-week" class="h-5 w-5 text-white" /><span>Тэнгисийн гэрийн гадаа</span></div>
    </div>
    <div>Та нэмэлтээр шагнал хожсон байна.</div>
    <Button @click="navigateTo('/price')" class="border-none text-lg text-primary" variant="outline" size="lg">Хүлээж авах</Button>
  </div>
</template>
