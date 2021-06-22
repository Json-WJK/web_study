import { createRouter, createWebHistory } from 'vue-router'
import routers from './routers/study'

const routes = [
  ...routers
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
