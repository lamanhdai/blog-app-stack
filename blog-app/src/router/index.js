import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import {useAuthStore} from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Home.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/posts',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Post.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  if (
    // make sure the user is authenticated
    !authStore.token &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'signin'
  ) {
    // redirect the user to the login page
    return { name: 'signin', query: { redirectUrl: to.path } }
  }
})

export default router
