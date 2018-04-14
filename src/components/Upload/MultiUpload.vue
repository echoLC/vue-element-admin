<template>
  <div class="multi-image-upload-wrapper">
    <el-upload
      class="single-image-uploader"
      :multiple="true"
      :file-list="fileList"
      list-type="picture-card"
      :on-preview="handlePreview"
      :action="uploadQiniuDomain"
      :before-upload="beforeUpload"
      :data="dataObj"
      accept="image/*"
      :on-success="handleImageSuccess"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>

    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
//  import uploadMixin from './upload-mixin.js'

  export default {
    name: 'HyMultiUpload',
    data: () => ({
      fileList: [],
      dialogVisible: false,
      dialogImageUrl: ''
    }),
    methods: {
      emitInput (fileList) {
        this.$emit('input', fileList.map(img => img.qiniuKey))
      },
      handleRemove (file, fileList) {
        this.emitInput(fileList)
      },
      handleImageSuccess (resp, file, fileList) {
        file.url = `${this.qiniuHost}${resp.key}`
        file.qiniuKey = resp.key
        this.emitInput(fileList)
      },
      handlePreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      }
    },
    mounted () {
      return this.getQiniuToken().then(() => {
        if (this.value) {
          this.fileList = this.transformValue(this.value)
          this.emitInput(this.fileList)
        }
      })
    }
  }
</script>

<style lang="scss">
</style>
