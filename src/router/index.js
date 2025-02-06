import { createRouter, createWebHistory } from 'vue-router'
import ContentView from '../views/Content.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'content',
      component: ContentView
    },
  ]
})

export default router
