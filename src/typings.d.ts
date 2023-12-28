import "vue-router";
import type { Component } from "vue";
declare module "vue-router" {
  interface RouteMeta {
    icon: Component;
  }
}
