import VueRouter from 'vue-router'

import Vue from "vue"
Vue.use(VueRouter)
//1 创建路由组件
//2 将组件和路由做映射
const routes =[
    {
        path:'/',
        name:'Main',
        redirect: '/home',
        component:() => import('../views/Main.vue'),

        children:[{
            path:'/home',
            name:'home',
            component:() => import('../views/home/indexh.vue')
        }]
    },
    {
        path:'/user',
        name:'User',
        component:() => import('../views/User/index.vue')
    },
    {
        path:'/mall',
        name:'mall',
        component:() => import('../views/mall/index.vue'),
    },
    {

        path:'/pageOne',
        name:'pageOne',
        component:() => import('../views/other/pageOne.vue'),
    },
    {

        path:'/pageTwo',
        name:'pageTwo',
        component:() => import('../views/other/pageTwo.vue'),
    }
]
//3 创建router实例
//4 在main.js中import
const router= new VueRouter({

    routes:routes
})
export default router