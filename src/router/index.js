import Home from '@/views/home/Home.vue'
import SignIn from '@/views/signIn/SignIn.vue'
import SignUp from '@/views/signUp/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: SignIn
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignUp
    }
  ]
})

export default router
