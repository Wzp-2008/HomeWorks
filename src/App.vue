<script setup lang="ts">
import { useRouterStore } from "./store/RouterStore.ts";
import { markRaw } from "vue";
import { Menu } from "@element-plus/icons-vue";

const routerStore = useRouterStore();
routerStore.$patch({
  router: [
    {
      name: "测试页面",
      path: "/index/test",
      component: () => import("./views/main/test.vue"),
      meta: { icon: markRaw(Menu) },
    },
  ],
});
</script>

<template>
  <router-view />
</template>
<style scoped></style>
