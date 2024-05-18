import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DetailView from '@/views/DetailView.vue'
import OffersView from '@/views/OffersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/users',
      name: 'users',
      component: OffersView
    },
    {
      path: '/users/:userId',
      name: 'profile-detail',
      component: DetailView
    }
  ]
})

export default router
