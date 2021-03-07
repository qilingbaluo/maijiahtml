<template>
  <div id="app">
    <!-- 头部 -->
    <div v-if="tab"
         class="selectNei">
      <div id="top-menu">
        <span>商家操作页面</span>
      </div>
      <div id="left-menu">
        <!-- 导航栏 -->
        <el-col :span="12">
          <el-menu default-active="2"
                   class="el-menu-vertical-demo"
                   @select="chooseMenu">
            <el-menu-item index="/food-list">
              <i class="el-icon-menu"></i>
              <span slot="title">拥有的商品</span>
            </el-menu-item>
            <el-menu-item index="/add-foods">
              <i class="el-icon-menu"></i>
              <span slot="title">发布商品</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">订单</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span slot="title">超市信息</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <span slot="title">退出登录</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <!-- 内容 -->
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
    <div v-if="tab2"
         class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab2: false,
      isCollapse: true,
      tab: true,
      usertab: true,
      usertab2: false
    };
  },
  methods: {
    chooseMenu (index) {
      // console.log(index)
      this.$router.push({
        path: index
      }) //router为false时使用push跳转
    },
  },
  watch: {
    $route (e) {
      if (e.name == 'maiLogin' || e.name == 'maiRegist') {
        this.tab = false
        this.tab2 = true
      } else {
        this.tab = true
        this.tab2 = false
      }
    },
    // 监听用户token
    // autUserlogin (newVal) {
    //   if (newVal == null) {
    //     this.$router.push({ path: '/userlogin' })
    //   }
    // }
  },
}
</script>

<style>
#top-menu span {
  position: absolute;
  font-size: 50px;
  font-weight: 600;
  left: 20px;
  margin-top: 20px;
}
</style>