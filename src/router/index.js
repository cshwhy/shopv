/*
 * @Author: your name
 * @Date: 2020-03-17 14:11:06
 * @LastEditTime: 2020-03-24 18:38:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vueclic:\Users\Administrator\Desktop\vue\shopv\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from  'vue-router'

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
    {
        path:'/home',
        component:() =>import('../views/home/Home')
    },
    {
        path:'/category',
        component:() =>import('../views/category/Category')
    },
    {
        path:'/cart',
        component:() =>import('../views/cart/Cart')
    },
    {
        path:'/profile',
        component:() =>import('../views/profile/Profile')
    },
    {
        path:'/detail/:iid',
        component:() =>import('../views/detail/Detail')
    },
];
const router = new VueRouter({
    routes,
    mode:'history'
})

//导出
export default router
