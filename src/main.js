import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./router/guard";
import "./until/vue";
import "./assets/fontsdetail/iconfont.css";
import "./assets/fonts/iconfont.css";
import "./assets/fontsmy/iconfont.css";
import "./style/index.scss";
import "./style/global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
