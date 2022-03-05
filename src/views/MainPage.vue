<template>
<!--  <Header msg="数据标注系统" mainPage="首页" settings="个人中心"/>-->
  <Header msg="数据标注系统" mainPage="首页" settings=""/>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>{{ email }}</span>
    </el-header>

    <el-main>
      <el-table :data="tableData" @row-click="openDetails">
        <el-table-column prop="description" label="内容介绍">
        </el-table-column>
        <el-table-column prop="start_time" label="开始时间">
        </el-table-column>
        <el-table-column prop="end_time" label="结束时间">
        </el-table-column>
        <el-table-column prop="marked" label="已标记">
        </el-table-column>
        <el-table-column prop="total" label="总计">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import {get} from "axios";
import {mapGetters} from "vuex";

export default {
  name: 'MainPage',
  data() {
    return {
      routerPath: {
        "abstract": "/Classify",
        "classify_text": "/Classify",
        "classify_image": "/Classify",
      },
      tableData: [],
      headersConfig: {
        headers: {
          Authorization: this.getToken()
        }
      }
    }
  },

  methods: {
    ...mapGetters(['getToken']),

    initial() {
      get("/api/get_task", this.headersConfig)
          .then((res) => {
            console.log(res)
            if (res.data.code === 200) {
              this.tableData = res.data.data
            } else {
              this.alert_code = res.data.code;
            }
          })
          .catch((res) => {
                console.log(res);
              }
          );
    },

    openDetails(row) {
      console.log(row.id);
      this.$router
          .push({
            path: this.routerPath[row.task_type],
            query: {
              taskId: row.id,
              title: row.title
            }
          })
          .catch(() => {
          });
      // row.task_type

    },
  },
  mounted() {
    this.initial();
  },
  components: {
    Header
  }
}
</script>
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}


html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
