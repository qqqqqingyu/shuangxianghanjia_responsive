<template>
  <mobile_weekly_forecast v-if="isMobile"></mobile_weekly_forecast>
  <pc_weekly_forecast v-else></pc_weekly_forecast>
</template>

<script>
import { isMobileTerminal }  from '@/utils/flexible'
import mobile_weekly_forecast from "./mobile/mobile_weekly_forecast";
import pc_weekly_forecast from "./pc/pc_weekly_forecast";
export default {
  name: "weekly_forecast",
  components:{pc_weekly_forecast, mobile_weekly_forecast },
  data(){
    return{
      isMobile:isMobileTerminal.value
    }
  },
  methods: {
    // 获取csrftoken 确保受保护接口不会响应403
    isMobileTerminal() {
      isMobileTerminal();
    },

  }
}
</script>

<style scoped>

</style>