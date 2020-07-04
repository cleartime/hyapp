import router from "./index";

router.beforeEach((to, from, next) => {
  if (to.name !== "Login") next({ name: "Login" });
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next();
});
