import Vue from 'vue'
import Router from 'vue-router'

import { constantRouterMap } from './routes'

Vue.use(Router)

const router = new Router({
  routes: constantRouterMap
})

export default router
