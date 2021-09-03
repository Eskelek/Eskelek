import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    // meta: { requiresAuth: true }
  },
  {
    path: '/privacy-policy',
    name: 'Policy',
    component: () => import(/* webpackChunkName: "policy" */ '../views/Policy.vue')
    // meta: { requiresAuth: true }
  },
  {
    path: '/coming-soon',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.getTndkrStatus) {
    next({ name: 'welcome' })
  } else {
    next()
  }
})

export default router
