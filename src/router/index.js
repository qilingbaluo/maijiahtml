import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/food-list',
    name: 'foodList',
    component: () => import(/* webpackChunkName: "about" */ '../views/foodList.vue')
  },
  {
    path: '/add-foods',
    name: 'addFoods',
    component: () => import(/* webpackChunkName: "about" */ '../views/addFoods.vue')
  },
  {
    path: '/mai-login',
    name: 'maiLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/mailogin.vue')
  },
  {
    path: '/mai-regist',
    name: 'maiRegist',
    component: () => import(/* webpackChunkName: "about" */ '../views/mairegist.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
