<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

defineProps({
  sliders: {
    type: Array,
    required: true
  }
})

const sliderRef = ref(null)
const slider = ref(null)
const currentPageIndex = ref(0)

BScroll.use(Slide)

onMounted(() => {
  slider.value = new BScroll(sliderRef.value, {
    click: true,
    scrollX: true,
    scrollY: true,
    momentum: false,
    bounce: false,
    probeType: 2,
    slide: true
  })

  slider.value.on('slideWillChange', page => {
    currentPageIndex.value = page.pageX
  })
})

onUnmounted(() => {
  slider.value.destroy()
})
</script>

<template>
  <div ref="sliderRef" class="min-h-[163px] text-0 touch-pan-y">
    <div class="relative overflow-hidden whitespace-nowrap">
      <div
        class="inline-block transform-translate3d-0 backface-hidden"
        v-for="item in sliders"
        :key="item.id"
      >
        <a class="w-full block" :href="item.link">
          <img class="w-full block" :src="item.pic" />
        </a>
      </div>
    </div>

    <div class="dots-wrapper absolute leading-3 bottom-3 left-1/2">
      <span
        class=""
        v-for="(item, index) in sliders"
        :key="item.id"
        :class="
          currentPageIndex === index
            ? 'inline-block w-5 h-2 my-0 mx-1 bg-text-ll rounded-[5px] translate-z-1px'
            : 'inline-block w-2 h-2 my-0 mx-1 bg-text-l rounded-[50%] translate-z-1px'
        "
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dots-wrapper {
  transform: translateX(-50%);
}
</style>
