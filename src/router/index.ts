import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/visits',
    },
    {
      path: '/visits',
      name: 'VisitList',
      component: () => import('@/views/visit/VisitList.vue'),
    },
    {
      path: '/visits/:id',
      name: 'VisitDetail',
      component: () => import('@/views/visit/VisitDetail.vue'),
      props: true,
    },
  ],
})

export default router
