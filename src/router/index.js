import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About.vue')

  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/pages/Portfolio.vue')

  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/pages/Contact.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router