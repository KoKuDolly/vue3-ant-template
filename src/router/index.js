import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/components/Layout/'),
    meta: {
      title: 'Layout',
      hidden: false,
      icon: 'PieChartOutlined',
    },
    children: [],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
