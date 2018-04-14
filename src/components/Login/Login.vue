<template>
  <div class="login-container">
    <el-form class="card-box login-form" auto-complete="on" ref="loginInfo" label-position="left">
      <h3 class="title">系统登录</h3>
<!-- 用户名 -->
      <el-form-item prop="mobile">
        <el-input name="mobile" type="text" v-model="mobile" auto-complete="on" placeholder="用户名"/>
      </el-form-item>

<!-- 密码 -->
      <el-form-item prop="password">
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="password" placeholder="密码"/>
        <span class="show-pwd" @click="showPwd"></span>
      </el-form-item>
<!-- 提交 -->
      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      pwdType: 'password',
      mobile: null,
      password: null
    }
  },
  methods: {
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin () {
      this.loading = true
      this.$router.push({name: 'hello'})
    },
    clearCookie () {
      const keys = document.cookie.match(/[^ =;]+(?=\=)/g) // eslint-disable-line
      if (keys) {
        for (let i = 0; i < keys.length; i += 1) {
          document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
      }
    }
  },
  created () {
    this.clearCookie()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../../styles/mixin.scss";
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    @include relative;
    height: 100vh;
    background-color: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
