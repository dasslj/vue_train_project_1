import {createRouter, createWebHistory} from "vue-router"

import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import HomePage from "../views/HomePage.vue"

const routes = [
    {
        path:'/',
        redirect:"/register"
    },
    {
        path:"/register",
        name:"登录界面",
        component:Register
    },
    {
        path:"/login",
        name:"注册界面",
        component:Login
    },
    {
        path:"/homePage",
        name:"首页",
        component:HomePage
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router