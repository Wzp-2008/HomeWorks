import { createRouter, createWebHashHistory } from "vue-router";
import { useUserStore } from "../store/UserStore.ts";
import { Auth } from "../entities/Auth.ts";
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
