
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "pc",
    component: () => import("@/views/pc/index.vue")
  },
  {
    path: "/mobile",
    name: "mobile",
    component: () => import("@/views/mobile/index.vue"),
  }
]
/** 创建路由实例 */
const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

router.beforeEach((to, _from, next) => {
  // 是否是移动端设备
  const isMobile =
    /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(
      navigator.userAgent
    );
  // 是否是手机端路由
  const isRouterMobile = to.fullPath?.includes("mobile");
  if (isMobile && !isRouterMobile) {
    next("/mobile")
  } else {
    next()
  }
});


export default router;
