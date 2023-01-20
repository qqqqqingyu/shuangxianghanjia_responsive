<template>
  <div class="container">
    <el-row>
      <el-col :xs="24" :md="24" :lg="12">
        <el-row style="margin-top: 20px">
          <el-col :span="2" :offset="1">
            <el-button icon="el-icon-arrow-left" circle size="mini" style="font-size:18px;font-weight: bolder"></el-button>
          </el-col>
          <el-col :span="10">
            <el-row style="justify-content: center;font-size:14px;font-weight: bolder;margin-top:5px;color: #2e2e2e">
              行业个股收益率预测
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
          <el-col :offset="1">
            <p style="font-size: 20px;font-weight: bold;color: #333333">行业列表</p>
          </el-col>
        </el-row>
<!--        <el-row style="margin-top: 10px">-->
<!--          <el-col :span="1">-->
<!--            <div class="industry" v-for="item in pictureList" :key="item.id">-->
<!--              <img :src="item.imgUrl" style="width:100%" />-->
<!--            </div>-->
<!--          </el-col>-->
<!--        </el-row>-->

        <p>{{myList}}</p>

      </el-col>
    </el-row>

  </div>



</template>

<script>
// import {pictures} from '@/constants/industryList'
// import {
//   getIndustryList,/*获取我发布的活动*/
// } from '@/api/month_redict'
import { useStore } from 'vuex'
// import {mapGetters} from'vuex'

export default {
  name: "mobile_weekly_forecast",
  data() {
    return {
      // pictureList:pictures,



    }
  },

  created() {

  },

  computed:{
    myList(){
      const store = useStore()
      // 触发 category 数据获取动作
      store.dispatch('industryList/useIndustryListData')
      return this.$store.getters.industryList;
    }

  },


  methods:{
//     getIndustryListMethod(){
//       getIndustryList().then((res) => {
//         this.industryList=res.data
//         console.log(res.data[0])
// //转换字段名
// //         this.industryList = JSON.parse(JSON.stringify(this.myList).replace(/name/g,"company"))
//       })
//     },

  },

  //实例创建之前钩子函数--给body添加行内样式
  beforeCreate () {
    this.$nextTick(()=>{
      document.body.setAttribute('style', 'background:#f5f8fa')
    })
  },
  //实例销毁之前钩子--移除body 标签的属性style
  beforeUnmount () {
    document.body.removeAttribute('style')
  }
}
</script>

<style scoped>
.container {
  height:100%;
}
</style>