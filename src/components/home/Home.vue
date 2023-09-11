<template>
  <el-container id="container">
    <el-aside width="250px">
      <el-container id="top">
        <img
          style="width: 25px; height: 25px; margin: auto; margin-right: 0"
          src="../../assets/logo.svg"
        />
        <div
          style="
            margin: auto;
            margin-left: 10px;
            color: #ffffff;
            font-size: 17px;
          "
        >
          电商后台管理
        </div>
      </el-container>

      <!--折叠菜单-->
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group>

      <el-menu
        :default-active="$route.path"
        style="height: 100%"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        @open="1"
        @close="1"
      >
        <el-menu-item-group>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Shop /></el-icon><span>订单管理</span>
            </template>
            <el-menu-item index="/home/order/0">普通订单</el-menu-item>
            <el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
          </el-sub-menu>
        </el-menu-item-group>

        <el-menu-item-group>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Goods /></el-icon> <span>商品管理</span>
            </template>
            <el-menu-item index="/home/goods/0">普通商品</el-menu-item>
            <el-menu-item index="/home/goods/1">秒杀商品</el-menu-item>
          </el-sub-menu>
        </el-menu-item-group>
      </el-menu>
    </el-aside>

    <el-main style="padding: 0">
      <el-header style="margin: 0; padding: 0; height: 80px">
        <el-container
          style="
            background-color: blanchedalmond;
            margin: 0;
            padding: 0;
            height: 80px;
          "
        >
          <div style="margin: auto; margin-left: 100px">
            <h1>欢迎您登录后台管理系统</h1>
          </div>
          <div style="margin: auto; margin-right: 5px">
            <el-button type="primary" @click="logout">注销</el-button>
          </div>
        </el-container>
      </el-header>

      <!-- 渲染具体的功能模块-->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Storage from "../../tools/Storage.js";

export default {
  name: "Home",

  data() {
    return {
      isCollapse: false,
    };
  },

  methods: {
    logout() {
      Storage.commit("clearUserInfo");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
