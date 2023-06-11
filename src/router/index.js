import { createRouter, createWebHistory } from 'vue-router'
 
const routes = [
  {
    path: "/Home",
    redirect: "/",
  },
  {
    path: "/IOSHelp",
    redirect: "/",
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/IOSHelp",
    name: "IOSHelp",
    component: () => import("../views/IOSHelp/IOSHelp.vue"),
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
]; 
 
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savePosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 };
  },
})
router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0;
  next();
});
 
export default router