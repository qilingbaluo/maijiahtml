<template>
  <div id="commodity-form">
    <div class="commodity-msg">
      <el-form label-width="120px"
               :model="commodity_info">
        <el-form-item label="商品名称">
          <el-input style="width:300px"
                    v-model="commodity_info.title"></el-input>
        </el-form-item>
        <el-form-item label="商品类别">
          <el-select style="width:150px"
                     v-model="commodity_info.region"
                     placeholder="请选择活动区域">
            <el-option label="熟食"
                       value="shushi"></el-option>
            <el-option label="冷冻生鲜"
                       value="shengxina"></el-option>
            <el-option label="蔬菜"
                       value="shucai"></el-option>
            <el-option label="水果"
                       value="水果"></el-option>
            <el-option label="饮品"
                       value="yinpin"></el-option>
            <el-option label="粮油"
                       value="liangyou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价格"
                      prop="pice"
                      :rules="[
      { required: true, message: '不能为空'},
      { type: 'number', message: '必须为数字值'}
    ]">
          <el-input type="pice"
                    v-model.number="commodity_info.pice"
                    style="width:100px"
                    autocomplete="off"></el-input> 元
        </el-form-item>
        <el-form-item label="商品名称">
          <input id="uploadLogo"
                 type="file"
                 style="width:200px;font-size:18px" />
        </el-form-item>
        <div class="commodity-item">
          <img :src="commodity_info.testLogo">
        </div>
        <el-form-item style="margin-top:-20px"
                      label="商品描述">
          <el-input type="textarea"
                    style="width:500px"
                    v-model="commodity_info.describe"></el-input>
        </el-form-item>
        <el-button style="position: absolute;left:700px;top:450px"
                   type="primary">发布商品</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commodity_info: {
        title: '',
        describe: '',
        region: '',
        pice: '',
        testLogo: ''
      },
      fileList: [
        {
          name: '',
          url: ''
        }
      ]
    };
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    }
  }

}
</script>

<style>
</style>