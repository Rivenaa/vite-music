<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = ref([
  {
    name: '推荐',
    path: '/recommend'
  },
  {
    name: '歌手',
    path: '/singer'
  },
  {
    name: '排行',
    path: '/rankings'
  },
  {
    name: '搜索',
    path: '/search'
  }
])
</script>

<template>
  <div class="flex h-11 leading-custom text-medium">
    <router-link
      v-for="tab in tabs"
      :key="tab.name"
      :to="tab.path"
      class="flex-1 text-center"
    >
      <span
        :class="
          route.path === tab.path
            ? 'pb-1 text-theme border-b-2 border-solid  border-theme'
            : ' pb-1 text-text-l'
        "
        >{{ tab.name }}
      </span>
    </router-link>
  </div>
</template>
