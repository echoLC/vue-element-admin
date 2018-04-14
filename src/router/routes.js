import Hello from '../components/HelloWorld.vue'
import Layout from '../components/Layout.vue'
import Login from '../components/Login/Login.vue'

export const constantRouterMap = [
  {
    name: 'login',
    path: '/login',
    title: '登录',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    redirect: '/login',
    hidden: true
  }]

export const asyncRouterMap = [
  {
    name: 'user',
    path: '/user',
    title: '用户管理',
    component: Layout,
    children: [
      {
        name: 'hello',
        path: 'hello',
        title: 'hello',
        component: Hello
      }
    ]
  }
]
