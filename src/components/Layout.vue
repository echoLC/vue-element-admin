<template>
  <div class="app-wrapper">
    <sidebar :routes="$router.options.routes" class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main class="app-main"></app-main>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, AppMain } from "@/components/Layout/index"

export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.hideSidebar {
    .sidebar-container {
      width: 36px;
      overflow: inherit;
    }
    .main-container {
      margin-left: 36px;
    }
  }
  .sidebar-container {
    transition: width 0.28s ease-out;
    width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .main-container {
    min-height: 100%;
    margin-left: 180px;
  }
  .app-main {
    padding: 20px 30px;
  }
}
</style>
