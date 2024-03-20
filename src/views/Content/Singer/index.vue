<script setup>
import { ref, onMounted } from 'vue'
import { getSingerList } from '@/api/singer'
import Scroll from '@/components/Scroll/index.vue'

onMounted(async () => {
  const res = await getSingerList()
  console.log(res)
})
</script>

<template>
  <Scroll class="relative w-full h-full overflow-hidden bg-background">
    <ul>
      <li class="pb-7.5">
        <h2
          class="h-7 leading-7 pl-5 text-small text-text-l bg-highlight-background"
        ></h2>
        <ul>
          <li class="flex items-center pt-5 pl-7.5">
            <img class="w-12.5 h-12.5 rounded-[50%]" src="" alt="" />
            <span class="ml-5 text-medium text-text-l"></span>
          </li>
        </ul>
      </li>
    </ul>
  </Scroll>
</template>

<style lang="scss" scoped></style>
