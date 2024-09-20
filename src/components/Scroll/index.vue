<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'

const options = defineProps({
  click: {
    type: Boolean,
    default: true
  },
  probeType: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['scroll'])

const rootRef = ref(null)
const scroll = ref(null)

BScroll.use(ObserveDOM)

onMounted(() => {
  scroll.value = new BScroll(rootRef.value, {
    observeDOM: true,
    ...options
  })

  if (options.probeType > 0) {
    scroll.value.on('scroll', pos => {
      emit('scroll', pos)
    })
  }
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
