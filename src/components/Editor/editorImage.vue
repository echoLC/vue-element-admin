<template>
  <div class="upload-container">
    <el-button icon='upload' :style="{background:color,borderColor:color}" @click="dialogVisible=true" type="primary">
      上传图片
    </el-button>
    <el-dialog :visible.sync="dialogVisible">
      <el-upload
        class="editor-slide-upload"
        action="https://upload.qiniu.com"
        :multiple="true"
        :file-list="fileList"
        :show-file-list="true"
        list-type="picture-card"
        :data="dataObj"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
        :before-upload="beforeUpload">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </el-dialog>
  </div>
</template>
<script>

  export default {
    name: 'editorSlideUpload',
    props: {
      prefix: {
        type: String,
        default: 'common'
      },
      color: {
        type: String,
        default: '#20a0ff'
      }
    },
    data () {
      return {
        dialogVisible: false,
        listObj: {},
        fileList: [],
        dataObj: {
          token: '',
          key: ''
        },
        qiniuHost: ''
      }
    },
    methods: {
      checkAllSuccess () {
        return Object.keys(this.listObj).every(item => this.listObj[item].hasSuccess)
      },
      handleSubmit () {
        const arr = Object.keys(this.listObj).map(v => this.listObj[v])
        if (!this.checkAllSuccess()) {
          this.$message('请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！')
          return
        }
        this.$emit('successCBK', arr)
        this.listObj = {}
        this.fileList = []
        this.dialogVisible = false
      },
      handleSuccess (response, file) {
        const uid = file.uid

        const item = this.listObj[uid]
        if (item) {
          item.url = `${this.qiniuHost}${response.key}`
          item.hasSuccess = true
        }
      },
      handleRemove (file) {
        const uid = file.uid
        delete this.listObj[uid]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .upload-container {
    .editor-slide-upload {
      margin-bottom: 20px;
    }
  }
</style>
