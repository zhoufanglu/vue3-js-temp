import {createRouter, createWebHashHistory } from 'vue-router'

const test = () => import('../views/test.vue')
const login = () => import('../views/login.vue')
const refDemo = () => import('../views/refDemo')

//组件通讯
const fatherCom = () => import('../views/vue3Message/fatherCom.vue')
const fatherCom2 = () => import('../views/vue3Message2/fatherCom.vue')

//商品列表学习
const userSelect = () => import('@/views/shop/userSelect.vue')

const goodListAndSearch = () => import('@/views/shop/goodListAndSearch.vue')

//异步渲染表格学习
const tableExpand = () => import('@/views/tableExpand.vue')


//模拟权限路由
export const authRouter = [
  {
    path: '/allSeePage',
    name: '所有人可见',
    component: 'allSeePage'
  },
  {
    path: '/adminPage',
    name: '管理员可见',
    component: 'adminPage'
  }
]
//constantRoutes初始路由 所有人可以见
const routes = [
  {path: "/", redirect: "/test"},
  {
    path: "/test",
    name: 'test',
    component: test,
  },{
    path: "/login",
    name: 'login',
    component: login,
  },{
    path: "/refDemo",
    name: 'refDemo',
    component: refDemo,
  },{
    path: "/fatherCom",
    name: 'fatherCom',
    component: fatherCom,
  },{
    path: "/fatherCom2",
    name: 'fatherCom2',
    component: fatherCom2,
  },{
    path: "/userSelect",
    name: 'userSelect',
    component: userSelect,
  },{
    path: "/goodListAndSearch",
    name: 'goodListAndSearch',
    component: goodListAndSearch,
  },{
    path: "/tableExpand",
    name: 'tableExpand',
    component: tableExpand,
  },
]



export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

