import { createRouter, createWebHistory } from 'vue-router'
import Rankings from '@/views/Content/Rankings/index.vue'
import Recommend from '@/views/Content/Recommend/index.vue'
import Search from '@/views/Content/Search/index.vue'
import Singer from '@/views/Content/Singer/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      meta: { title: '推荐' }
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      meta: { title: '歌手' }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: { title: '搜索' }
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: Rankings,
      meta: { title: '排行' }
    }
  ]
})

export default router
