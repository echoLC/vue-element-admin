<template>
  <el-upload
    class="single-image-uploader"
    :multiple="false"
    :show-file-list="false"
    :action="uploadQiniuDomain"
    :before-upload="beforeUpload"
    :data="dataObj"
    accept="image/*"
    :on-success="handleImageSuccess">
    <img v-if="imageUrl" :src="imageUrl" class="single-image">
    <i v-else class="el-icon-plus single-image-uploader-icon"></i>
  </el-upload>
</template>

<script>

export default {
  name: 'HySingleUpload',
  data: () => ({
    imageUrl: ''
  }),
  methods: {
    emitInput (val) {
      this.$emit('input', val)
    },
    handleImageSuccess (resp) {
      this.imageUrl = `${this.qiniuHost}${resp.key}`
      this.emitInput(resp.key)
    }
  },
  mounted () {
    return this.getQiniuToken().then(() => {
      this.imageUrl = this.transformValue(this.value)
      this.emitInput(this.value)
    })
  }
}
</script>

<style lang="scss">
  .single-image-uploader {
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload:hover {
      border-color: #20a0ff;
    }
    .single-image-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      background: #fbfdff;
      width: 148px;
      height: 148px;
      line-height: 148px;
      text-align: center;
    }
    .single-image {
      width: auto;
      height: 148px;
      display: block;
    }
  }
</style>
