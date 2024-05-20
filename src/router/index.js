import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DetailView from '@/views/DetailView.vue'
import OffersView from '@/views/OffersView.vue'
import MusthaveView from '@/views/MusthaveView.vue'

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
      path: '/offers',
      name: 'offers',
      component: OffersView
    },
    {
      path: '/offers/:userId',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/musthave',
      name: 'musthave',
      component: MusthaveView
    }
  ]
})

export default router
