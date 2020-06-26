import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Index",
  //   component: () =>
  //     import(/* webpackChunkName: "Index" */ "../views/index.vue")
  // },
  {
    path: "/",
    name: "Home",
    meta: {
      showFoot: true
    },
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/home/index.vue")
  },
  {
    path: "/my",
    name: "My",
    meta: {
      showFoot: true
    },
    component: () =>
      import(/* webpackChunkName: "My" */ "../views/my/index.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "Detail" */ "../views/detail/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
