import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import {createRouter, createWebHashHistory} from "vue-router";

const app = createApp(App);
const routes = [
    { path: '/', component: import("./views/MainPage/index.vue") },
    { path: '/login', component: import("./views/Login/index.vue") },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
app.use(router)
app.mount('#app');
