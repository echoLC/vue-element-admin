<template>
  <el-select :value="value" :disabled="disabled" @input="handleInput" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.text"
      :value="item.value"
      :disable="item.disabled">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'HySelectGroup',
  props: {
    options: {
      type: Array,
      default: () => ([])
    },
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style>
</style>
