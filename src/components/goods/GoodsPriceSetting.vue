<template>
  <div class="title">
    <div style="line-height: 35px; margin-left: 20px">价格设置</div>
  </div>

  <el-container class="content-row">
    <div class="input-tip">市场价:</div>
    <div class="input-field">
      <el-input-number
        v-model="queryParam.maketPrice"
        :min="0"
        placeholder=""
      ></el-input-number>
    </div>
  </el-container>

  <el-container class="content-row">
    <div class="input-tip">展示价:</div>
    <div class="input-field">
      <el-input-number
        v-model="queryParam.showPrice"
        :min="0"
        placeholder=""
      ></el-input-number>
    </div>
  </el-container>

  <el-container class="content-row">
    <div class="input-tip">积分数:</div>
    <div class="input-field">
      <el-input-number
        v-model="queryParam.coin"
        :min="0"
        placeholder=""
      ></el-input-number>
    </div>
  </el-container>

  <el-container class="content-row">
    <div class="input-tip">成本价:</div>
    <div class="input-field">
      <el-input-number
        v-model="queryParam.price"
        :min="0"
        placeholder=""
      ></el-input-number>
    </div>
  </el-container>

  <el-container class="content-row">
    <div class="input-tip">限购数:</div>
    <div class="input-field">
      <el-input-number
        v-model="queryParam.limit"
        :min="0"
        placeholder=""
      ></el-input-number>
    </div>
  </el-container>

  <div class="title">
    <div style="line-height: 35px; margin-left: 20px">库存设置</div>
  </div>

  <el-container class="content-row">
    <div class="input-tip">库存数量:</div>
    <div class="input-field">
      <el-input-number
        v-model="queryParam.count"
        :min="0"
        placeholder=""
      ></el-input-number>
    </div>
  </el-container>

  <el-container class="content-row">
    <div class="input-tip">基础销量:</div>
    <div class="input-field">
      <el-input-number
        v-model="queryParam.sellCount"
        :min="0"
        placeholder=""
      ></el-input-number>
    </div>
  </el-container>

  <el-container class="content-row">
    <div class="input-tip">浏览数量:</div>
    <div class="input-field">
      <el-input-number
        v-model="queryParam.viewCount"
        :min="0"
        placeholder=""
      ></el-input-number>
    </div>
  </el-container>

  <!-- 按钮 -->
  <el-container class="content-row">
    <el-button type="success" plain @click="submit">提交</el-button>
    <el-button type="warning" plain @click="cancel">取消</el-button>
  </el-container>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
  data() {
    return {
      queryParam: {
        maketPrice: 0,
        showPrice: 0,
        coin: 0,
        price: 0,
        limit: 0,
        count: 0,
        sellCount: 0,
        viewCount: 0,
      },
    };
  },

  methods: {
    //点击取消按钮回退到上个页面
    cancel() {
      this.$router.go(-1);
    },

    //点击提交按钮提交
    submit() {
      // this.$message({
      //   type: "success",
      //   message: "设置商品价格与库存:" + JSON.stringify(this.queryParam),
      // });

      ElMessage.success(
        "设置商品价格与库存:" + JSON.stringify(this.queryParam)
      );
    },
  },
};
</script>

<style scoped>
.title {
  background-color: #e1e1e1;
  height: 35px;
  margin-bottom: 15px;
}
</style>
