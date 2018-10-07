<template>
  <div class="components-container">
    <div>
      <editor class="editor" v-model="content" prefix="echolc"></editor>
    </div>
  </div>
</template>

<script>
import Editor from '@/components/Editor'

export default {
  name: 'tinymce-demo',
  components: { Editor },
  data() {
    return {
      content: 'tinymce'
    }
  },
  created () {
    console.log(123)
  }
}
</script>

<style scoped lang="scss">
.editor-content{
  margin-top: 20px;
  .editor{
    height: 300px;
  }
}
</style>


