<template>
  <div class="content-container">
    <el-tabs model-value="1" type="card" @tab-click="handleClick">
      <el-tab-pane label="基础设置" name="1">
        <base-setting></base-setting>
      </el-tab-pane>

      <el-tab-pane label="价格库存" name="2">
        <price-setting></price-setting>
      </el-tab-pane>

      <el-tab-pane label="商品详情" name="3">
        <detail-setting></detail-setting>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GoodsBaseSetting from "./GoodsBaseSetting.vue";
import GoodsPriceSetting from "./GoodsPriceSetting.vue";
import GoodsDetailSetting from "./GoodsDetailSetting.vue";
import { ElMessage } from "element-plus";

export default {
  data() {
    return {};
  },

  //注册组件
  components: {
    BaseSetting: GoodsBaseSetting,
    PriceSetting: GoodsPriceSetting,
    DetailSetting: GoodsDetailSetting,
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab.paneName);
      this.activeTab = tab.paneName;
      // this.$message({
      //   type: "success",
      //   message: "切换tab",
      // });
      ElMessage.success("切换tab");
    },
  },
};
</script>
