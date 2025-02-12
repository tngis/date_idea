<script setup lang="ts">
const props = withDefaults(defineProps<{ isLoading: boolean }>(), {
  isLoading: false,
})
</script>
<template>
  <div v-if="props.isLoading" class="absolute bottom-0 left-0 right-0 top-0 z-40 flex items-center justify-center bg-background">
    <div class="h-10 w-10 animate-spin rounded-full border-4 border-l-primary"></div>
  </div>
</template>
