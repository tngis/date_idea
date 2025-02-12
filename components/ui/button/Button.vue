<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'
import { cn } from '@/services/utils'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  loading: false,
})
</script>


<template>
  <Primitive :as="as" :as-child="asChild" :class="cn(buttonVariants({ variant, size }), 'flex gap-2', props.class)">
    <template v-if="props.loading">
      <loading-spinner :is-loading="props.loading" />
    </template>
    <slot />
  </Primitive>
</template>
