// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import Store from "./tools/Storage.js";

const app = createApp(App);
app.use(router);
app.use(Store);
app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
