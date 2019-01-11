<template>
  <el-date-picker
    class="hy-date-range-picker"
    :value="parsedValue"
    @input="handleDatePicked"
    align="center"
    :type="type"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :placeholder="placeholder">
  </el-date-picker>
</template>

<script>

export default {
  name: 'HyDateRangePicker',
  props: {
    value: {
      type: Object,
      default: () => {
        return ''
      }
    },
    placeholder: {
      type: String,
      default: '请选择日期范围'
    },
    type: {
      type: String,
      default: 'daterange' // ['daterange', 'datetimerange']
    }
  },
  computed: {
    parsedValue () {
      if (!this.value) {
        // TODO emit input to provide default value?
        return ''
      }
      const { beginDate, endDate } = this.value
      return [beginDate, endDate]
    }
  },
  methods: {
    handleDatePicked (value) {
      const [beginDate, endDate] = value
      // TODO allow customize `beginDate` and `endDate`
      this.$emit('input', { beginDate, endDate })
    }
  }
}
</script>

<style lang="scss">
  .hy-date-range-picker.el-input.el-date-editor--daterange {
    width: 250px;
  }
</style>
