<script setup>
import Header from './views/Header/index.vue'
import Tab from './views/Tab/index.vue'
import pinyin from 'pinyin'
console.log(pinyin)
const p = pinyin('中文字符串')
console.log(p)
</script>

<template>
  <div class="fixed top-0 bottom-0 left-0 right-0">
    <Header />
    <Tab />
    <router-view />
  </div>
</template>
