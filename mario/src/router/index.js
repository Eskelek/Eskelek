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
    path: '/links',
    name: 'links',
    component: () => import(/* webpackChunkName: "policy" */ '../views/Links.vue')
    // meta: { requiresAuth: true }
  },
  // {
  //   path: '/promo',
  //   name: 'promo',
  //   component: () => import(/* webpackChunkName: "policy" */ '../views/External.vue')
  //   // meta: { requiresAuth: true }
  // }
  // {
  //   path: '/coming-soon',
  //   name: 'welcome',
  //   component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
  // }
  {
    path: '/:pathMatch(.*)*',
    name: 'Errorpage',
    component: () => import(/* webpackChunkName: "errorpage" */ '../views/Errorpage.vue')
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
