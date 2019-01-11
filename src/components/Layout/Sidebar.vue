<template>
  <el-menu mode="vertical" :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  components: {
    SidebarItem
  },
  props: {
    routes: Array
  }
}
</script>

<style lang="scss">
.el-menu {
  min-height: 100%;
}
</style>
