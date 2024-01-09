import { createApp, markRaw } from "vue";
import "element-plus/es/components/message/style/css";
import App from "./App.vue";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "vue-router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import { router } from "./router";
import { Menu } from "@element-plus/icons-vue";
import { useRouterStore } from "./store/RouterStore.ts";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

const routerStore = useRouterStore();
routerStore.$patch({
  router: [
    {
      name: "测试页面",
      path: "/test",
      component: () => import("./views/main/test.vue"),
      meta: { icon: markRaw(Menu) },
    },
  ],
});

app.mount("#app");
