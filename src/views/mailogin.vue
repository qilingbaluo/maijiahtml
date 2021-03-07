<template>
  <div id="mailogin">
    <div class="loginbox">
      <div class="header">
        <h1>登录</h1>
      </div>
      <div class="box1">
        <el-form :label-position="'right'"
                 label-width="150px"
                 :model="formData">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名"
                      v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码"
                      v-model="formData.password"
                      auto-complete="new-password"
                      show-password>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="font-size: 18px;"
                       @click="userLogin()"
                       type="success">登录</el-button>
            <el-button style="font-size: 18px;"
                       @click="toRegister()"
                       type="primary"
                       round>申请账号</el-button>

          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    toRegister () {
      this.$router.push({
        path: '/mai-regist'
      })
    }
  },
}
</script>

<style>
.box1 .el-input__inner {
  width: 280px;
}
.box1 .el-form-item {
  margin-bottom: 50px;
}
.box1 .el-button--primary {
  margin-left: 50px;
  width: 120px;
}
.el-input__suffix-inner i {
  position: absolute;
  left: -100px;
}
</style>