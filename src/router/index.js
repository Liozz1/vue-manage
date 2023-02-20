import VueRouter from 'vue-router'
import User from '../views/User/index.vue'
import Vue from "vue"
Vue.use(VueRouter)
//1 创建路由组件
//2 将组件和路由做映射
const routes =[
    {
        path:'/',
        name:'Main',
        component:() => import('../views/Main.vue'),
        children:[{
            path:'/home',
            name:'home',
            component:() => import('../views/home')
        }]
    },
    {
        path:'/user',
        name:'User',
        component:User
    }
]
//3 创建router实例
//4 在main.js中import
const router= new VueRouter({

    routes:routes
})
export default router