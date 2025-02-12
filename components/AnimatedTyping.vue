<template>
  <div class="typing-dots bg-background-secondary">
    <span class="bg-foreground" />
    <span class="bg-foreground" />
    <span class="bg-foreground" />
  </div>
</template>

<style scoped>
.typing-dots {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 30px;
  border-radius: 15px;
  padding: 5px;
}

.typing-dots span {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 2px;
  border-radius: 50%;
  animation: bounce 1.4s infinite;
}

.typing-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%,
  75%,
  100% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-10px);
  }
}
</style>
