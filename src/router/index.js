import { createRouter, createWebHistory } from 'vue-router'
 
const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'mengdaoApp',
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/webPage',
    name: 'webPage',
    component: () => import('@/views/webPage/index.vue')
  }
] 
 
const router = createRouter({
  history: createWebHistory(),
  routes
})
 
export default router