<template>
  <div class="hy-list">
    <el-table :data="list" v-loading="loading" :element-loading-text="loadingText" border highlight-current-row>
      <slot></slot>
    </el-table>

    <el-pagination
      v-if="pageInfo.total > pageInfo.pageSize"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      :total="pageInfo.total"
      :page-size="pageInfo.pageSize"
      :current-page="pageInfo.currentPage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'HyList',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '数据加载中'
    },
    list: {
      type: Array,
      default: () => []
    },
    pageInfo: {
      type: Object,
      default: () => ({
        total: 0,
        pageSize: 0,
        currentPage: 1
      })
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$emit('current-change', val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .hy-list {
    margin: 36px 0;
  }

  .el-pagination {
    margin: 36px;
    text-align: center;
  }
</style>
