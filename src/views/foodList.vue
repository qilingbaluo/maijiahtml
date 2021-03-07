<template>
  <div id="foodList">
    <div class="shangpin">商品列表</div>
    <el-divider></el-divider>
    <div class="food-list">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="footpic">
              <el-image :src="require('../assets/logo.png')"></el-image>
            </div>
            <div class="food-title">
              <span>商品名称</span>
            </div>
            <div class="caozuo">
              <el-button type="success"
                         icon="el-icon-search"
                         circle></el-button>
              <el-button type="danger"
                         icon="el-icon-delete"
                         circle>
              </el-button>
            </div>
            <el-divider></el-divider>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="footpic">
              <el-image :src="require('../assets/logo.png')"></el-image>
            </div>
            <div class="food-title">
              <span>商品名称</span>
            </div>
            <div class="caozuo">
              <el-button type="success"
                         icon="el-icon-search"
                         circle></el-button>
              <el-button type="danger"
                         icon="el-icon-delete"
                         circle>
              </el-button>
            </div>
            <el-divider></el-divider>
          </div>
        </el-col>
      </el-row>

    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style>
.el-divider {
  margin-left: 15px;
  width: 1500px;
}
#addbtn span {
  font-size: 20px;
}
</style>