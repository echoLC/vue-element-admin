<template>
  <el-breadcrumb class="hy-levelbar" separator=">">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <router-link v-if='item.redirect==="noredirect"||index==levelList.length-1' to="">
        {{ item.title }}
      </router-link>
      <router-link v-else :to="item.redirect || item.path">
        {{ item.title }}
      </router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  created () {
    this.getBreadcrumb()
  },
  data () {
    return {
      levelList: []
    }
  },
  computed: {
    routes () {
      return this.$store.state.permission.routes
    }
  },
  methods: {
    getBreadcrumb () {
      const paths = this.$route.path.substring(1).split('/')
      let currentRoutes = this.routes
      this.levelList = paths.map((currentPath) => {
        const breadcrumbItem = this.findRoutes(currentRoutes, currentPath)
        if (breadcrumbItem) {
          if (breadcrumbItem.children) {
            currentRoutes = breadcrumbItem.children
          }
          return breadcrumbItem
        }
        return null
      }).filter(s => !!s)
    },
    findRoutes (routes, currentPath) {
      return routes.find(route => route.path.replace('/', '') === currentPath)
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.hy-levelbar.el-breadcrumb {
  font-size: 14px;
  line-height: 50px;
  margin-left: 20px;
  display: inline-block;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
