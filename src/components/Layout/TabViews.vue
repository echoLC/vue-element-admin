<template>
  <div class='tabs-view-container'>
    <router-link class="tabs-view" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path">
      <el-tag :closable="true" :type="isActive(tag.path) ? 'primary' : ''" @close='closeViewTabs(tag, $event)'>
        {{ getRouteTitle(tag.name) }}
      </el-tag>
    </router-link>
  </div>
</template>

<script>

export default {
  computed: {
    routesMap () {
      return this.generateRoutesMap(this.$router.options.routes)
    },
    visitedViews () {
      return this.$store.state.app.visitedViews.slice(-6)
    }
  },
  methods: {
    getRouteTitle (name) {
      const route = this.routesMap[name]
      return route ? route.title : ''
    },
    closeViewTabs (view, $event) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view.path)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push({ name: latestView.name })
          } else {
            this.$router.push('/')
          }
        }
      })
      $event.preventDefault()
    },
    addViewTabs () {
      const routeName = this.$route.name
      if (!routeName) {
        return false
      }
      this.$store.dispatch('addVisitedViews', this.$route)
    },
    isActive (path) {
      return path === this.$route.path
    },
    generateRoutesMap (routes) {
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
  },
  watch: {
    $route () {
      this.addViewTabs()
    }
  },
  mounted () {
    this.addViewTabs()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tabs-view-container {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
    .tabs-view {
      margin-left: 10px;
    }
  }
</style>
