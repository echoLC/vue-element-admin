<template>
  <el-radio-group :value="value" @input="handleRadioInput" class="hy-radio-group">
    <el-radio v-for="(item, index) in items" :key="index" :label="item.value">{{ item.text }}</el-radio>
  </el-radio-group>
</template>
<script>
export default {
  name: 'HyRadioGroup',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    value: {
      type: [Number, Boolean, String],
      default: 0
    }
  },
  methods: {
    handleRadioInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.hy-radio-group {
  display: inline-block;
  margin: 10px;
}
</style>
