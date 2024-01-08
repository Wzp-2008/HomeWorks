import type { Component } from "vue";

declare module "vue-router" {
  interface RouteMeta {
    icon: Component | null | undefined;
  }
}

export {};
