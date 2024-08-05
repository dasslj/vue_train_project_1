import {createRouter, createWebHistory} from "vue-router"

import Login from "../views/Login.vue"
import Register from "../views/Register.vue"

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
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router