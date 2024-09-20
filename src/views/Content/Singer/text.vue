<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { getSingerList } from '@/api/singer'
import Scroll from '@/components/Scroll/index.vue'

const singers = ref([])
const currentTitle = ref('')
const titleOffsets = ref([])

onMounted(async () => {
  const res = await getSingerList()
  singers.value = res.singers
  await nextTick()
  calculateTitleOffsets()
})

const calculateTitleOffsets = () => {
  const titles = document.querySelectorAll('.title')
  titleOffsets.value = Array.from(titles).map(title => {
    return {
      title: title.innerText,
      offsetTop: title.offsetTop
    }
  })
}

const handleScroll = event => {
  const scrollTop = event.target.scrollTop
  for (let i = titleOffsets.value.length - 1; i >= 0; i--) {
    if (scrollTop >= titleOffsets.value[i].offsetTop) {
      currentTitle.value = titleOffsets.value[i].title
      break
    }
  }
}
</script>

<template>
  <Scroll
    class="relative w-full h-full overflow-hidden"
    v-loading="!singers.length"
    @scroll="handleScroll"
  >
    <div>
      <!-- 固定标题 -->
      <div class="fixed top-0 left-0 w-full bg-white z-10">
        <div class="h-[1.88rem] leading-[1.88rem] pl-5">{{ currentTitle }}</div>
      </div>
      <!-- 列表 -->
      <ul>
        <li v-for="group in singers" :key="group.title" class="pb-7.5">
          <h2
            class="h-7.5 leading-[30px] pl-5 text-small text-text-l bg-highlight-background title"
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
              <img class="w-12.5 h-12.5 rounded-full" v-lazy="item.pic" />
              <!-- 歌手名字 -->
              <span class="ml-5 text-medium text-text-l">{{ item.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </Scroll>
</template>

<style lang="scss" scoped>
.fixed-title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 10;
}
</style>
