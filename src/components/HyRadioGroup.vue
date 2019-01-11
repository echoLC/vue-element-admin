<template>
  <el-radio-group :value="value" @input="handleRadioInput" class="hy-radio-group">
    <slot/>  
    <el-radio v-for="(item, index) in newItems" :key="index" :label="item.value">{{ item.text }}</el-radio>
  </el-radio-group>
</template>
<script>
import { convertEnumToArray } from '../utils/index.js'

export default {
  name: 'HyRadioGroup',
  props: {
    items: {
      type: [Array, Object],
      default: () => []
    },
    value: {
      type: [Number, Boolean, String],
      default: 0
    },
    isNumber: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleRadioInput (value) {
      this.$emit('input', value)
    }
  },
  computed: {
    newItems () {
      return convertProtoEnumToArray(this.items, this.isNumber)
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
