import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error/404'], resolve)
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/error/401'], resolve)
  },
  {
    path: '/login',
    component: (resolve) => require(['@/views/login/login'], resolve)
  },
  //
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: () => import('@/views/drag.vue'),
        name: 'Drag'
      },
      {
        path: '/about',
        component: () => import('@/views/About.vue'),
        name: 'About'
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]
const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  mode:'hash',
  routes
})

export default router
