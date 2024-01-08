import { createApp } from "vue";
import "element-plus/es/components/message/style/css";
import App from "./App.vue";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "vue-router";

import { router } from "./router";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(createPinia());
app.mount("#app");
