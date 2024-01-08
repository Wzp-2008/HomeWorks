import { defineStore } from "pinia";
import { RouteRecord } from "vue-router";
export const useRouterStore = defineStore("router", {
  state(): { router: RouteRecord[] } {
    return { router: [] };
  },
});
