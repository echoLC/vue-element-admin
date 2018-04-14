// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filter'

// import styles
import './styles/index.scss'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

import * as components from '@/components'

Vue.config.productionTip = false

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

if (typeof window !== 'undefined' && window.Vue) {
  Object.keys(components).forEach((name) => {
    window.Vue.component(name, components[name])
  })
}

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
