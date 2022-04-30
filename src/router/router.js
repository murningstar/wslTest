import { createRouter, createWebHistory } from "vue-router"
import main from '@/pages/main'
import posts from '@/pages/posts'
import about from '@/pages/about'
import postPage from '@/components/postPage'

let routes = [
    {
        path:'/',
        component:main
    },
    {
        path:'/posts',
        component:posts
    },
    {
        path:'/about',
        component:about
    },
    {
        path:'/posts/:id',
        component:postPage
    }
]
let router = createRouter({
    routes,
    history: createWebHistory()
})

export default router