import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Fail from '@/views/Fail.vue'
import About from '@/views/About.vue'
import Question from '@/views/Question.vue'
import Finish from '@/views/Finish.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/error',
    name: 'Error',
    component: Fail
  },
  {
    path: '/start',
    name: 'About',
    component: About
  },
  {
    path: '/question/:index',
    name: 'Question',
    component: Question
  },
  {
    path: '/finish',
    name: 'Finish',
    component: Finish
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
