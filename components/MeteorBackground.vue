<template>
  <div>
    <span
      v-for="(meteor, idx) in meteors"
      :key="'meteor' + idx"
      :class="[
        'absolute h-0.5 w-0.5 animate-meteor-effect rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
        'before:absolute before:left-1/2 before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-[\'\']',
        className,
      ]"
      :style="{
        top: Math.random() * 100 + 'vh',
        left: Math.random() * 100 + 'vw',
        transform: 'rotate(215deg)',
        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  number: {
    type: Number,
    default: 20,
  },
  className: {
    type: String,
    default: '',
  },
})

const meteors = ref(new Array(props.number).fill(true))
</script>

<style scoped>
.animate-meteor-effect {
  animation: meteor-effect 1s linear infinite;
}

@keyframes meteor-effect {
  0% {
    transform: translateY(0) translateX(0) rotate(215deg);
    opacity: 1;
  }

  100% {
    transform: translateY(100vh) translateX(100vw) rotate(215deg);
    opacity: 0;
  }
}
</style>
