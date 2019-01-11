<template>
  <el-menu class="navbar" mode="horizontal">
    <levelbar></levelbar>
    <tab-views></tab-views>
    <div class="float-right">
      <span>欢迎您，{{ 'admin' }}</span>
      <router-link to="/login" class="logout">
        | 退出登录
      </router-link>
      </div>
  </el-menu>
</template>

<script>
import TabViews from './TabViews'
import Levelbar from './Levelbar'

export default {
  name: 'Navbar',
  components: {
    TabViews,
    Levelbar
  },
  methods: {
    loginout() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;

  .float-right {
    float: right;
    margin-right: 20px;
    font-size: 14px;
    .logout {
      color: #97a8be;
    }
  }

  .errLog-container {
    line-height: 14px;
  }


  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
