import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '../views/Content.vue'
import AchievementDetialView from '../views/AchievementDetail.vue'
import BrandView from '../views/Brand.vue'
import AboutView from '../views/AboutMe.vue'
import ContactView from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'content',
      component: ContentView
    },
    {
      path: '/achievement/',
      name: 'achievement',
      component: AchievementDetialView,
    },
    {
      path: '/brand/',
      name: 'brand',
      component: BrandView,
    },
    {
      path: '/about/',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact/',
      name: 'contact',
      component: ContactView,
    }
  ]
})

export default router
