import { createStore } from "vuex";

const Store = createStore({
  state() {
    return {
      username: "",
      password: "",
    };
  },

  getters: {
    isLogin: (state) => {
      return state.username.length > 0;
    },
  },

  mutations: {
    //注销删除用户信息
    clearUserInfo(state) {
      state.username = "";
      state.password = "";
    },

    //登录保存用户信息
    registUserInfo(state, { username, password }) {
      state.username = username;
      state.password = password;
    },
  },
});

export default Store;
