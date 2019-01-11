import Vue from 'vue'
import Router from 'vue-router'

import Layout from './components/Layout'
import Login from './views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      hidden: true
    },
    {
      path: '/section',
      name: 'section',
      title: '部门',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Layout,
      children: [
        {
          name: 'about',
          path: 'about',
          title: '关于',
          component: () => import('@/views/About.vue')
        }
      ]
    }
  ]
})
