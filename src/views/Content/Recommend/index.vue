<script setup>
import { ref, computed, onMounted } from 'vue'
import { getRecommend } from '@/api/recommend'
import Slider from './slider.vue'
import Scroll from '@/components/Scroll/index.vue'

const sliders = ref([])
const albums = ref([])
const loadingText = ref('正在载入...')

const loading = computed(() => {
  return !sliders.value.length && !albums.value.length
})

onMounted(async () => {
  try {
    const result = await getRecommend()
    console.log(result)
    sliders.value = result.sliders
    albums.value = result.albums
  } catch (error) {
    console.error('Error fetching recommendations:', error)
  }
})
</script>

<template>
  <div
    class="fixed w-full top-[88px] bottom-0"
    v-loading:[loadingText]="loading"
  >
    <Scroll class="h-full overflow-hidden">
      <div>
        <!-- slider -->
        <div class="relative w-full h-0 pt-[40%] overflow-hidden">
          <div class="absolute w-full h-full top-0 left-0">
            <Slider v-if="sliders.length" :sliders="sliders" />
          </div>
        </div>

        <!-- recommend list -->
        <div>
          <h1
            v-if="!loading"
            class="h-[65px] leading-[65px] text-center text-medium text-theme"
          >
            热门歌单推荐
          </h1>
          <ul>
            <li
              class="flex items-center pt-0 px-5 pb-5"
              v-for="item in albums"
              :key="item.id"
            >
              <!-- 图片 -->
              <div class="flex-grow-0 flex-shrink-0 pr-5">
                <img class="w-[60px] h-[60px]" v-lazy="item.pic" />
              </div>
              <!--  标题 -->
              <div
                class="flex flex-col justify-center flex-1 leading-5 overflow-hidden text-medium"
              >
                <h2 class="mb-[10px] text-text">{{ item.username }}</h2>
                <p class="text-text-d">{{ item.title }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>
