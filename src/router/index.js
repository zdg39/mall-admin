import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/login/Login.vue";
import Home from "../components/home/Home.vue";
import Store from "../tools/Storage.js";

import App from "../APP.vue";

const routes = [
  {
    // 首页
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    // 登录页
    path: "/login",
    name: "Login",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

//全局的前置守卫进行页面跳转前的登录状态校验
router.beforeEach((form) => {
  let isLogin = Store.getters.isLogin;
  if (isLogin || form.name == "Login") {
    return true;
  } else {
    return { name: "Login" };
  }
});

export default router;
