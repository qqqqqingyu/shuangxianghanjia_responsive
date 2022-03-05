<template>
  <div class="login-page">
    <div style="height: 20vh" >
    </div>
    <div class="login">
      <el-row>
        <el-col :xs="2" :sm="1" :md="2" :lg="4" :xl="7">
        </el-col>
        <el-col :xs="20" :sm="22" :md="20" :lg="16" :xl="10">
          <div class="loginForm">
            <el-row>
              <div id="login_img">
                <img src="../assets/login_img.svg">
              </div>
              <div class="login-box">
                <p class="login-title">数据标注系统</p>
                <el-form ref="form" :model="form" label-width="auto" class="word">
                  <el-form-item  label="请输入邮箱：">
                    <el-input prefix-icon="el-icon-printer" v-model="email"></el-input>
                  </el-form-item>
                  <el-form-item  label="请输入密码：">
                    <el-input v-model="password" prefix-icon="el-icon-lock" type="password"></el-input>
                  </el-form-item>
                </el-form>
                <el-button style="margin-bottom: 20px" type="primary" @click="submit_admin_login()">确认登录</el-button>
              </div>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="2" :sm="1" :md="2" :lg="4" :xl="7">
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'


const axios = require('axios');
// import baseUrl from '../router/api_url.js';
import {mapMutations} from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      login: true,
      email: "",
      password: "",
      alert_code: "",
      alert_message: '',
    };
  },
  // components: {
  //   Header
  // },
  methods: {
    ...mapMutations(['setToken']),

    test() {
      alert("demo")
    },
    setErrors(e) {
      window.alert(e)
    },
    submit_admin_login() {
      // let requestUrl = baseUrl + '/auth/login'
      let requestUrl = "/api/auth/login"
      let post_data = new FormData();
      post_data.append('email', this.email);
      post_data.append('password', this.password);
      console.log(requestUrl)
      console.log(post_data)
      axios
          .post(requestUrl, post_data)
          .then((res) => {
                if (res.data.code === 200) {
                  this.setToken("Bearer " + res.data.data.token)
                  this.$router
                      .push({
                        name: 'MainPage',
                      })
                      .catch(() => {
                      });
                } else {
                  this.alert_code = res.data.code;
                  if (this.alert_code === 201)
                    window.alert("密码错误，请重新输入")
                  else {
                    if (this.alert_code === 202) {
                      window.alert("用户不存在")
                    }

                  }
                }
              }
          )
          .catch((res) => {
                console.log(res);
              }
          )
    }
  }
}
</script>

<style>
.login {
  text-align: center;
  align-self: center;

}

.loginForm {
  font-weight: bold;
  background: white;
  border-radius: 20px;
  /*background: #007bff;*/
}

html, body {
  width: auto;
  height: 100%;
  margin: 0;
  padding: 0;

}
.login-page{
  height: 100%;
  width: auto;
  background-image: url("../assets/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

#login_img {
  height:400px;
  width: 400px;
  margin-top: 80px;
  margin-bottom: 50px;
}

.login-box {
  margin-top: 80px;
  margin-left: 40px;
}

.login-title {
  margin-bottom: 90px;
  color: #007bff;
  font-weight: bolder;
  font-size: 2em;
  margin-left: 40px;
}
.word{
  color: #007bff;
}
@media only screen and (max-width: 840px) {
  .loginForm{
    text-align: center;
  }
  .login-title {
    color: #007bff;
    font-weight: bolder;
    font-size: 2em;
    margin-top: 0;
    margin-bottom: 2vh;
  }
  #login_img {
    height: 30vh;
    width: 30vh;
    margin: 0;
    text-align: center;
    justify-content: center;
  }
  .login-box{
    margin-top:0px ;
  }

}
</style>
