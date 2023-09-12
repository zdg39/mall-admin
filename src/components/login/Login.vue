<template>
  <div id="container">
    <div id="title">
      <h1>电商后台管理系统</h1>
    </div>

    <div class="input">
      <el-input v-model="username" placeholder="请输入用户名">
        <template #prepend>
          <el-icon><User /></el-icon>
        </template>
      </el-input>
    </div>

    <div class="input">
      <el-input v-model="password" placeholder="请输入密码" show-password>
        <template #prepend>
          <el-icon><Lock /></el-icon>
        </template>
      </el-input>
    </div>

    <div class="input">
      <el-button
        type="primary"
        @click="login"
        style="width: 500px"
        :disabled="disabled"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script>
import Storage from "../../tools/Storage.js";
import { ElMessage } from "element-plus";

export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: "",
    };
  },

  computed: {
    disabled() {
      return this.username.length == 0 || this.password.length == 0;
    },
  },

  methods: {
    login() {
      console.log("登录", this.username, this.password);
      Storage.commit("registUserInfo", {
        username: this.username,
        password: this.password,
      });

      ElMessage({
        message: "登录成功",
        type: "success",
        duration: 1000,
      });

      setTimeout(() => {
        this.$router.push({ name: "Home" });
      }, 1000);
    },
  },
};
</script>

<style scoped>
#container {
  background: #595959;
  /* background-image: url("../../assets/bg.png"); */
  height: 100%;
  width: 100%;
  position: absolute;
}

#title {
  text-align: center;
  color: azure;
  margin-top: 200px;
}
.input {
  margin: 20px auto;
  width: 500px;
}
</style>
