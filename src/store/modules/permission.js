const DEFAULT_SUPER_ADMIN_ROLE = 0

/**
 * Check permission of a route
 * @param {Array} roles
 * @param {Array} route
 * @return {Boolean} hasPermission
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  }
  return true
}

function filterAsyncRouter (asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

function generateRoutesMap (routes) {
  const routesMap = {}
  routes.forEach(node => {
    const name = node.name
    const route = {
      [name]: node
    }
    Object.assign(routesMap, route)
    if (node.children) {
      Object.assign(routesMap, generateRoutesMap(node.children))
    }
  })
  return routesMap
}

function plugin (constantRouterMap = [], asyncRouterMap = []) {
  if (plugin.installed) {
    return
  }

  const permission = {

    state: {
      routes: constantRouterMap,
      addRoutes: [],
      routesMap: {},
      isRoutesFiltered: false
    },

    mutations: {
      SET_ROUTERS: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRouterMap.concat(routes)
        state.routesMap = generateRoutesMap(state.routes)
      },
      UPDATE_COUNT: (state, payload) => {
        Object.keys(payload).forEach((routerName) => {
          const value = payload[routerName]

          state.routes.forEach((route) => {
            if (!route.children) {
              return
            }
            route.children.forEach((child) => {
              if (child.name === routerName) {
                child.meta = Object.assign({}, child.meta, {
                  count: value
                })
              }
            })
          })
        })
      },
      SET_FILTER_STATE: (state) => {
        state.isRoutesFiltered = true
      }
    },

    actions: {
      UpdateCount ({ commit }, payload) {
        commit('UPDATE_COUNT', payload)
      },
      GenerateRoutes ({ commit }, roles = []) {
        return new Promise(resolve => {
          let accessedRouters
          if (roles.indexOf(DEFAULT_SUPER_ADMIN_ROLE) >= 0) {
            accessedRouters = asyncRouterMap
          } else {
            accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
          }
          commit('SET_ROUTERS', accessedRouters)
          commit('SET_FILTER_STATE')
          resolve()
        })
      }
    }
  }

  plugin.installed = true
  return permission
}

export default plugin
