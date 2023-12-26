import { createApp } from "vue";
import "element-plus/es/components/message/style/css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const app = createApp(App);
const routes = [
	{ path: "/", component: import("./views/MainPage/index.vue") },
	{ path: "/login", component: import("./views/Login/index.vue") },
];
const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
});
app.use(router);
app.mount("#app");
