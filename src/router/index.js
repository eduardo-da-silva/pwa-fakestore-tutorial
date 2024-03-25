import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutFull from '@/layouts/LayoutFull.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/categorias/:category',
          name: 'Category',
          component: () => import('@/views/CategoryView.vue'),
          props: true
        }
      ]
    }
  ]
})

export default router
