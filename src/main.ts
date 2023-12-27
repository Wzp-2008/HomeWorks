import { createApp } from "vue";
import "element-plus/es/components/message/style/css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);
const routes = [
  { path: "/", component: import("./views/Admin/MainPage/index.vue") },
  { path: "/homework", component: import("./views/User/HomeWork/index.vue") },
  { path: "/login", component: import("./views/Login/index.vue") },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router);
app.use(router);
app.use(createPinia());
app.mount("#app");
