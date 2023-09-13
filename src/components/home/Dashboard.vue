<template>
  <div class="content-container">
    <el-container class="content-row">
      <div class="info">总交易额:{{ this.data.allTra }}</div>
      <div class="info">秒杀交易额:{{ this.data.speTra }}</div>
      <div class="info">普通商品交易额:{{ this.data.norTra }}</div>
      <div class="info">累计用户数:{{ this.data.userCount }}</div>
      <div class="info">分销总用户数:{{ this.data.managerCount }}</div>
    </el-container>

    <el-container class="content-row">
      <el-radio-group v-model="type" @change="changeType">
        <el-radio-button label="总交易额"></el-radio-button>
        <el-radio-button label="商品交易额"></el-radio-button>
        <el-radio-button label="新用户销量"></el-radio-button>
        <el-radio-button label="下单转化率"></el-radio-button>
        <el-radio-button label="付款转化率"></el-radio-button>
        <el-radio-button label="流水"></el-radio-button>
      </el-radio-group>
    </el-container>

    <charts id="charts" :xData="xData" :data="chartsData"></charts>
    <div class="realTime">
      <div class="info">实时数据-更新时间:{{ data.time }}</div>

      <el-container class="content-row">
        <div class="block">
          <div class="title">付款金额:10000</div>
          <div class="subTitle">当日:1900</div>
          <div class="subTitle">今日:1020</div>
        </div>

        <div class="block">
          <div class="title">支付点单数:1000</div>
          <div class="subTitle">当日:100</div>
          <div class="subTitle">今日:100</div>
        </div>

        <div class="block">
          <div class="title">付款人数:503</div>
          <div class="subTitle">当日:102</div>
          <div class="subTitle">今日:300</div>
        </div>

        <div class="block">
          <div class="title">付款转换率:70</div>
          <div class="subTitle">当日:50</div>
          <div class="subTitle">今日:70</div>
        </div>
      </el-container>

      <el-container class="content-row">
        <div class="block">
          <div class="title">访客数:105310</div>
          <div class="subTitle">当日:1000</div>
          <div class="subTitle">今日:1000</div>
        </div>

        <div class="block">
          <div class="title">访客次数:105310</div>
          <div class="subTitle">当日:1000</div>
          <div class="subTitle">今日:1000</div>
        </div>

        <div class="block">
          <div class="title">新增用户:105310</div>
          <div class="subTitle">当日:1000</div>
          <div class="subTitle">今日:1000</div>
        </div>

        <div class="block">
          <div class="title">累计用户:105310</div>
          <div class="subTitle">当日:1000</div>
          <div class="subTitle">今日:1000</div>
        </div>
      </el-container>
    </div>
  </div>
</template>

<script>
import Charts from "../financial/Charts.vue";
import Mock from "../../mock/Mock.js";

export default {
  data() {
    return {
      xData: ["8月1日", "8月2日", "8月3日", "8月4日", "8月5日", "8月6日"],
      chartsData: [],
      name: "销量",
      type: "总交易额",
      data: {},
    };
  },

  //注册组件
  components: {
    Charts: Charts,
  },

  mounted() {
    this.chartsData = Mock.getChartsData();
    this.data = Mock.getTradeData();
  },

  methods: {
    changeType() {
      this.chartsData = Mock.getChartsData();
    },
  },
};
</script>

<style scoped>
#charts {
  width: 1200px;
  height: 400px;
}

.info {
  margin: 15px 40px;
  font-size: 20px;
  color: #777777;
}

.realTime {
  border: #777777 solid 1px;
  width: 1200px;
  height: 300px;
}

.block {
  margin: auto;
  width: 300px;
  padding: 10px 30px;
}

.title {
  font-size: 20px;
  color: #777777;
}

.subTitle {
  font-size: 18px;
  color: #777777;
  margin-top: 3px;
}
</style>
