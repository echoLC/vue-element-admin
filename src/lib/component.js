import * as components from '@/components'

function install (Vue) {
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name])
  })
}

export default install
