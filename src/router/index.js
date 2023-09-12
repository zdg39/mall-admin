import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/login/Login.vue";
import Home from "../components/home/Home.vue";
import Order from "../components/order/Order.vue";
import Goods from "../components/goods/Goods.vue";
import AddGood from "../components/goods/AddGood.vue";
import GoodsCategory from "../components/goods/GoodsCategory.vue";

import Store from "../tools/Storage.js";

import App from "../APP.vue";

const routes = [
  {
    // 首页
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "order/:type", //0-普通订单 1-秒杀订单
        name: "Order",
        component: Order,
      },
      {
        path: "goods/:type", //0-普通商品 1-秒杀商品 2-今日推荐
        name: "Goods",
        component: Goods,
      },
      {
        path: "goods/add/:type", //0-普通订单 1-秒杀订单
        name: "AddGood",
        component: AddGood,
      },
      {
        path: "category",
        name: "GoodsCategory",
        component: GoodsCategory,
      },
    ],
    // redirect: "/home/order/0",
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
