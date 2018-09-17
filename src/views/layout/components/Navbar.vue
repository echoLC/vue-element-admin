<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>

    <breadcrumb class="breadcrumb-container"></breadcrumb>

    <tags-view></tags-view>

    <div class="right-menu">
      <span>欢迎您，{{ 'admin' }}</span>
      <div @click="logout" class="logout">
        | 退出登录
      </div>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import TagsView from './TagsView'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    TagsView
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('toggleSideBar')
    },
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    display: inline-block;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .tags-view-container {
    float: left;
  }
  .right-menu {
    float: right;
    height: 100%;
    margin-right: 20px;
    font-size: 14px;
    .logout {
      color: #97a8be;
      cursor: pointer;
      display: inline-block;
    }
  }
}
</style>
