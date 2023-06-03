import { createRouter, createWebHistory } from 'vue-router'
 
const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/IOSHelp',
    name: 'IOSHelp',
    component: () => import('../views/IOSHelp/IOSHelp.vue')
  },
  {
    path: '/charts',
    name: 'charts',
    component: () => import('../views/charts/charts.vue')
  },
  /* {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home/index.vue'),  
    children: [
      {
        path: '/IOSHelp/IOSHelp',
        name: 'IOSHelp',
        component: () => import('../views/IOSHelp/IOSHelp.vue'),
      }]
  } */
  

] 
 
const router = createRouter({
  history: createWebHistory(),
  routes
})
 
export default router