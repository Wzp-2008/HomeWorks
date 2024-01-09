import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
export const useRouterStore = defineStore("router", {
  state(): { router: RouteRecordRaw[] } {
    return { router: [] };
  },
  persist: true,
});
