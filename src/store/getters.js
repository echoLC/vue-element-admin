export default {
  getLoading: ({loading}) => loading.loading,
  errLog: state => state.errLog.errLog,
  addRoutes: state => state.permission.addRoutes,
  routes: state => state.permission.routes,
  routesMap: state => state.permission.routesMap,
  isRoutesFiltered: state => state.permission.isRoutesFiltered
}
