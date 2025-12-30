import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/component', //path는 경로를 뜻함
      component: () => import( '@/views/Component.vue')
    },
    {
      path: '/Page98',
      component: () => import( '@/views/Page98.vue')
    },
    {
      path: '/Page103',
      component: () => import( '@/views/Page103.vue')
    },
    {
      path: '/Mission01',
      component: () => import( '@/views/mission/Mission01.vue')
    },
    {
      path: '/Page108',
      component: () => import( '@/views/Page108.vue')
    },
    {
      path: '/Page110',
      component: () => import( '@/views/Page110.vue')
    }
  ],
})

export default router
