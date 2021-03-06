import Vue from "vue"
import VueRouter from "vue-router"
import Main from "../views/Main.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main
    },
    {
        path: "/generation-:genId",
        name: "Generation",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "generation" */ "../views/Generation.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router
