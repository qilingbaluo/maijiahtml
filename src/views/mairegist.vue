<template>
  <div id="mairegist">
    <div class="mairegistbox">
      <div class="header">
        <h1>申请账号</h1>
      </div>
      <div class="registbox1">
        <el-form :label-position="'right'"
                 label-width="150px"
                 :model="formData">
          <el-form-item label="店铺名">
            <el-input placeholder="请输入店铺名"
                      v-model="formData.shopname"></el-input>
          </el-form-item>
          <el-form-item label="店铺编号">
            <el-input placeholder="请输入店铺号"
                      onkeyup="this.value = this.value.replace(/^[a-zA-Z]\w{4,19}$/,'');"
                      v-model="formData.shopid"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码"
                      v-model="formData.password"
                      auto-complete="new-password"
                      show-password>
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input placeholder="请再次输入密码"
                      v-model="formData.password2"
                      auto-complete="new-password"
                      show-password>
            </el-input>
          </el-form-item>
          <div class="registbtn">
            <el-form-item>
              <el-button style="font-size: 18px;"
                         @click="maiRegist()"
                         type="success">申请账号</el-button>
              <el-button style="font-size: 18px;"
                         @click="toLogin()"
                         type="primary"
                         round>去登陆</el-button>

            </el-form-item>
          </div>
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
        shopname: '',
        shopid: '',
        password: '',
        password2: '',

      },
    }
  },
  methods: {
    toLogin () {
      this.$router.push({ path: '/mai-login' })
    }
  },
}
</script>

<style>
.registbox1 .el-form-item__content {
  width: 300px;
}
.registbox1 .el-form-item {
  margin-bottom: 38px;
}
.registbtn .el-form-item {
  position: absolute;
  margin-top: 50px;
}
</style>