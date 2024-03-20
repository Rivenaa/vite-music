<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

const options = defineProps({
  click: {
    type: Boolean,
    default: true
  }
})

const rootRef = ref(null)
const scroll = ref(null)

BScroll.use(ObserveDOM)

onMounted(() => {
  scroll.value = new BScroll(rootRef.value, {
    observeDOM: true,
    ...options
  })
})

onUnmounted(() => {
  scroll.value.destroy()
})
</script>

<template>
  <div ref="rootRef">
    <slot />
  </div>
</template>
