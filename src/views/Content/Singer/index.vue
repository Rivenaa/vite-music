<script setup>
import { ref, onMounted } from 'vue'
import { getSingerList } from '@/api/singer'
import useFixed from './use-fixed'
import Scroll from '@/components/Scroll/index.vue'

const singers = ref([])
const { groupRef } = useFixed()

onMounted(async () => {
  const res = await getSingerList()
  singers.value = res.singers
  console.log(singers.value)
})
</script>

<template>
  <Scroll
    class="relative w-full h-full overflow-hidden"
    v-loading="!singers.length"
  >
    <div>
      <!--  固定标题 -->
      <div class="absolute top-0 left-0 w-full">
        <div class="h-[1.88rem] leading-[1.88rem]"></div>
      </div>
      <!-- 列表 -->
      <ul ref="groupRef">
        <li v-for="group in singers" :key="group.title" class="pb-7.5">
          <h2
            class="h-7.5 leading-[30px] pl-5 text-small text-text-l bg-highlight-background"
          >
            {{ group.title }}
          </h2>
          <ul>
            <li
              v-for="item in group.list"
              :key="item.id"
              class="flex items-center pt-5 pl-7.5"
            >
              <!-- 图片 -->
              <img class="w-12.5 h-12.5 rounded-[50%]" v-lazy="item.pic" />
              <!-- 歌手名字 -->
              <span class="ml-5 text-medium text-text-l">{{ item.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Scroll>
</template>

<style lang="scss" scoped></style>
