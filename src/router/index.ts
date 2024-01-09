import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "../store/UserStore.ts";
import { Auth } from "../entities/Auth.ts";
import { useRouterStore } from "../store/RouterStore.ts";

const routes = [
  {
    name: "index",
    path: "/",
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

  const routes = router.getRoutes();
  const { router: routers } = routerStore;
  if (routes.length === 2) {
    for (const route of routers) {
      router.addRoute("index", route);
    }
    return to.fullPath;
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
