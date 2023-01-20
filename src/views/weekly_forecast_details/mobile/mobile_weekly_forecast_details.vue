<template>
  <div class="container">
    <el-row style="margin-top: 5px">
      <el-col :span="2" :offset="1">
        <img src="../../../assets/images/return.svg" alt="返回" height="18" style="margin-top: 5px">
<!--        <el-button icon="el-icon-arrow-left" circle size="mini" style="font-size:18px;font-weight: bolder"></el-button>-->
      </el-col>
      <el-col :span="10" class="title">
        <span>行业个股收益率预测</span>
        <el-button>哈哈</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "mobile_weekly_forecast_details",

  // 设置背景
  beforeCreate () {
    this.$nextTick(()=>{
      document.body.setAttribute('style', 'background:#F5F8FA')
    })
  },
  //实例销毁之前钩子，移除body标签的属性style
  beforeUnmount () {
    document.body.removeAttribute('style')
  },
}
</script>

<style scoped>
.title {
  justify-content: center;
  font-size:14px;
  font-weight: bolder;
  margin-top:5px;
  color: #2e2e2e
}
</style>