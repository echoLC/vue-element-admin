<template>
  <div class="hy-error-log" v-if="logList">
    <el-badge :is-dot="logList.length !== 0" @click.native="showErrorLogs" :value="logList.length">
      <i class="el-icon-warning"></i>
    </el-badge>
    <el-dialog title="bug日志" :visible.sync="dialogTableVisible" >
      <el-table :data="logList">
        <el-table-column label="message">
          <template slot-scope="scope">
            <div>msg:{{ scope.row.err.message }}</div>
            <br/>
            <div>url: {{ scope.row.url}}</div>
          </template>
        </el-table-column>
        <el-table-column label="stack">
          <template slot-scope="scope">
            {{ scope.row.err.stack}}
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import errorLog from '@/store/modules/errLog'

export default {
  name: 'ErrLog',
  props: {
    logList: [Array, Object]
  },
  data: () => ({
    dialogTableVisible: false
  }),
  methods: {
    showErrorLogs () {
      this.dialogTableVisible = true
    },
    closeErrorLogDialog () {
      this.dialogTableVisible = false

      errorLog.clearLog()
    }
  }
}
</script>

<style lang="scss">
.hy-error-log {
  display: inline-block;
  margin: auto 15px;
}
</style>
