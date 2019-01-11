<template>
  <div>
    <template v-for="(item, index) in routes">
      <router-link v-if="!item.hidden && !item.children" :to="subRoute(item)" :key="index">
        <!-- 单级导航 -->
        <el-menu-item :index="subRoute(item)">
          <icon-svg v-if='item.icon' :icon-class="item.icon" />{{ item.title }}
        </el-menu-item>
      </router-link>

      <!-- 多级导航 -->
      <!-- 一级 -->
      <el-submenu :index="item.name" v-if="!item.hidden && item.children" :key="index">
        <template slot="title">
          <icon-svg v-if='item.icon' :icon-class="item.icon" />{{ item.title }}
          <el-badge class="sidebar-unread" :value="item.meta && item.meta.count" v-if="item.meta && item.meta.count > 0" />
        </template>
        <template v-for="(child, index) in item.children">
          <template v-if='!child.hidden'>
            <sidebar-item class="menu-indent" v-if="child.children && child.children.length > 0" :routes="[child]" :key="index"></sidebar-item>
            <router-link v-else class="menu-indent" :to="subRoute(item, child)" :key="index">
              <!-- 二级 -->
              <el-menu-item :index="subRoute(item, child)" v-if="!child.hidden">
                {{ child.title }}
                <el-badge class="sidebar-unread" :value="child.meta && child.meta.count" v-if="child.meta && child.meta.count > 0" />
              </el-menu-item>
            </router-link>
          </template>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: Array
  },
  methods: {
    subRoute (item, child) {
      return child ? `${item.path}/${child.path}` : item.path
    }
  }
}
</script>

<style lang="scss">
.svg-icon {
  margin-right: 10px;
}
.hideSidebar .menu-indent {
  display: block;
  text-indent: 10px;
}

.el-badge.sidebar-unread > .el-badge__content {
  border: 0 none;
}
</style>
