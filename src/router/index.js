

const routes = [
  
]
/** 创建路由实例 */
export const router = createRouter({
  history: 'hash',
  routes: routes,
  strict: true
});

router.beforeEach((to, _from, next) => {
  if (to.path !== "/login") {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      removeToken();
      next({ path: "/login" });
    }
  } else {
    next();
  }
});


export default router;
