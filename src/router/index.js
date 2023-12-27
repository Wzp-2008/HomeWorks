// router/index.js
import {createRouter, createWebHistory} from 'vue-router'
import EditPassword from "../views/User/Router/EditPassword.vue";
import Home from "../views/User/Router/Home.vue";
import UserAbout from "../views/User/Router/UserAbout.vue";
import WordsAbout from "../views/User/Router/WordsAbout.vue";
import WordsSubmit from "../views/User/Router/WordsSubmit.vue";

const routes = [
    {path: '/UserEditPassword', component: EditPassword},
    {path: '/UserHome', component: Home},
    {path: '/UserUserAbout', component: UserAbout},
    {path: '/UserWordsAbout', component: WordsAbout},
    {path: '/UserWordsSubmit', component: WordsSubmit},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
