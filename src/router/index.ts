import { createRouter, createWebHashHistory, useRouter } from "vue-router";
import { useUserStore } from "../store/UserStore.ts";
import { Auth } from "../entities/Auth.ts";
import { useRouterStore } from "../store/RouterStore.ts";
import { markRaw } from "vue";
import { Menu } from "@element-plus/icons-vue";
const routes = [
  {
    name: "index",
    path: "/index",
    component: () => import("../views/main/index.vue"),
  },
  {
    name: "login",
    path: "/login",
    component: () => import("../views/login/index.vue"),
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to) => {
  const userStore = useUserStore();
  const routerStore = useRouterStore();

  const { router: routers } = routerStore;
  for (const route of routers) {
    router.addRoute("index", route);
  }

  const { userLevel } = userStore;
  if (to.path !== "/login") {
    if (userLevel === Auth.NO_LOGIN) {
      return "/login";
    }
  } else {
    if (userLevel !== Auth.NO_LOGIN) {
      return "/";
    }
  }
  return true;
});
