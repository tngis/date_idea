<script lang="ts" setup></script>

<template>
  <div class="flex h-screen w-full items-center justify-center p-4">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-6 text-center">
        <span class="text-lg">Та Тэнгисийн талаар хэр сайн мэдэх вэ?</span>
        <span class="text-md">Асуултанд хариулаад Тэнгистэй болзоонд явах эрх хожоорой.</span>
      </div>
      <div class="flex justify-center">
        <Button @click="navigateTo('/questions/1')" size="lg" class="w-fit text-xl">Эхлэх</Button>
      </div>
    </div>
  </div>
</template>
