<template>
  <el-date-picker
    class="hy-date-range-picker"
    :value="parsedValue"
    @input="handleDatePicked"
    align="center"
    :picker-options="pickerOptions"
    :type="type"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :placeholder="placeholder">
  </el-date-picker>
</template>

<script>
import { dateRange } from '@/utils/date'

function handlePickerClick (type, prevNum) {
  return function pick (picker) {
    const arr = type !== null ? dateRange(type, prevNum) : [null, null]
    picker.$emit('pick', arr)
  }
}

export default {
  name: 'HyDateRangePicker',
  props: {
    value: {
      type: Object,
      default: ''
    },
    quickOption: {
      type: Boolean,
      default: false
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
    },
    pickerOptions () {
      if (!this.quickOption) {
        return null
      }

      return {
        shortcuts: [{
          text: '全部',
          onClick: handlePickerClick(null)
        }, {
          text: '今天',
          onClick: handlePickerClick('day')
        }, {
          text: '昨天',
          onClick: handlePickerClick('day', 1)
        }, {
          text: '本周',
          onClick: handlePickerClick('week')
        }, {
          text: '上周',
          onClick: handlePickerClick('week', 1)
        }, {
          text: '本月',
          onClick: handlePickerClick('month')
        }, {
          text: '上月',
          onClick: handlePickerClick('month', 1)
        }]
      }
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
