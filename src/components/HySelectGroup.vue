<template>
  <el-select :value="value" :filterable="filterable" :disabled="disabled" @input="handleInput" :placeholder="placeholder">
    <slot/> 
    <el-option
      v-for="item in newOptions"
      :key="item.value"
      :label="item.text"
      :value="item.value"
      :disable="item.disabled">
    </el-option>
  </el-select>
</template>

<script>
import { convertEnumToArray } from '../utils/index.js'

export default {
  name: 'HySelectGroup',
  props: {
    options: {
      type: [Array, Object],
      default: () => ([])
    },
    value: {
      type: [Number, String],
      default: null
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isNumber: {
      type: Boolean,
      default: true
    },
    filterable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  },
  computed: {
    newOptions () {
      return convertProtoEnumToArray(this.options, this.isNumber)
    }
  }
}
</script>

<style>
</style>
