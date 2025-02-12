<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster position="top-right" rich-colors />
</template>

<script setup lang="ts">
import NProgress from 'nprogress'

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {
  NProgress.configure({ showSpinner: false })
  NProgress.start()
})

nuxtApp.hook('page:finish', () => {
  NProgress.done()
})
</script>
