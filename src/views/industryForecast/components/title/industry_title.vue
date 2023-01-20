<template>
  <mobile_title v-if="isMobile"></mobile_title>
  <pc-title v-else></pc-title>
</template>

<script>
import {isMobileTerminal} from '@/utils/flexible'
import mobile_title from "./mobile/mobile_title";
import PcTitle from "./pc/pc_title";

export default {
  name: "industryTitle",
  components: {PcTitle, mobile_title},
  data() {
    return {
      isMobile: isMobileTerminal.value
    }
  },
  methods: {
    // 获取csrftoken 确保受保护接口不会响应403
    isMobileTerminal() {
      isMobileTerminal();
    },
  },
}
</script>

<style scoped>

</style>