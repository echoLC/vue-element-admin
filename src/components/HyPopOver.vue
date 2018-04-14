<template>
  <div>
    <el-popover
      ref="popover"
      placement="top"
      width="160"
      v-model="visible">
      <slot></slot>
      <div class="confirm-btn-group">
        <el-button size="mini" type="text" @click="cancel">取消</el-button>
        <el-button type="primary" size="mini" @click="confirm">确定</el-button>
      </div>
    </el-popover>
    <el-button v-popover:popover>{{ text }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'HyPopOver',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    visible: false
  }),
  methods: {
    confirm () {
      this.visible = false
      this.$emit('confirm')
    },
    cancel () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
.confirm-btn-group {
  text-align: right;
  margin: 0;
}
</style>
