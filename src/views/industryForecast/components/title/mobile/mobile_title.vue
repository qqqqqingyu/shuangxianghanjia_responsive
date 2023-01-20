<template>

  <div class="container">
    <el-row>
      <el-col :span="24" class="title" style="justify-content: center">
        <span>行业个股收益率预测</span>
      </el-col>
      <el-button>默认按钮</el-button>
      <el-input placeholder="请输入内容"></el-input>

    </el-row>

  </div>
</template>

<script>
export default {
  name: "mobile_title",
  // 设置背景
  beforeCreate () {
    this.$nextTick(()=>{
      document.body.setAttribute('style', 'background:#F5F8FA')
    })
  },
  //实例销毁之前钩子，移除body标签的属性style
  beforeUnmount () {
    document.body.removeAttribute('style')
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 3em;
}
</style>