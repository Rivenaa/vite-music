<script setup>
import { ref } from 'vue'

const title = ref('正在加载...')

function setTitle(newTitle) {
  title.value = newTitle
}

defineExpose({ setTitle })
</script>

<template>
  <div class="loading">
    <div class="text-center">
      <img width="24" height="24" src="./loading.gif" alt="" />
      <p class="leading-5 text-small border-text-l">{{ title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
