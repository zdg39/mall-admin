<template>
  <div class="content-container">
    <div>
      <el-container class="content-row">
        <div class="input-tip">商品名称:</div>
        <div class="input-field">
          <el-input v-model="queryParam.good" placeholder=""></el-input>
        </div>

        <div class="input-tip">收货人:</div>
        <div class="input-field">
          <el-input v-model="queryParam.consignee" placeholder=""></el-input>
        </div>

        <div class="input-tip">支付时间:</div>
        <div class="input-field">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-model="queryParam.payTime"
            placeholder=""
          />
        </div>
      </el-container>

      <el-container class="content-row">
        <div class="input-tip">用户名称:</div>
        <div class="input-field">
          <el-input v-model="queryParam.name" placeholder=""></el-input>
        </div>

        <div class="input-tip">手机号:</div>
        <div class="input-field">
          <el-input v-model="queryParam.phone" placeholder=""></el-input>
        </div>

        <div class="input-tip">发货时间:</div>
        <div class="input-field">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-model="queryParam.sendTime"
            placeholder=""
          />
        </div>
      </el-container>
    </div>

    <div class="content-row">
      <el-container>
        <el-button type="primary" @click="requestData">筛选</el-button>
        <el-button type="danger" @click="clear">清空筛选</el-button>
        <el-button type="primary" @click="exportData">导出</el-button>
        <el-button type="primary" @click="dispatchGoods">批量发货</el-button>
        <el-button type="primary" @click="exportDispatchGoods"
          >下载批量发货样单</el-button
        >
      </el-container>
    </div>

    <!--表格内容-->
    <div>
      <el-tabs type="card" @tab-click="handleClick">
        <el-tab-pane label="全部"></el-tab-pane>
        <el-tab-pane label="未支付"></el-tab-pane>
        <el-tab-pane label="已支付"></el-tab-pane>
        <el-tab-pane label="待发货"></el-tab-pane>
        <el-tab-pane label="已发货"></el-tab-pane>
        <el-tab-pane label="支付超时"></el-tab-pane>
      </el-tabs>

      <el-table
        ref="multipleTable"
        :data="orderList"
        tooltip-effect="dark"
        border
        style="width: 100%"
        @selection-change="handleSeletionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="商品" width="100" prop="name"></el-table-column>
        <el-table-column
          label="总价/数量"
          width="100"
          prop="price"
        ></el-table-column>

        <el-table-column
          label="买家信息"
          width="100"
          prop="buyer"
        ></el-table-column>

        <el-table-column
          label="交易时间"
          width="200"
          prop="time"
        ></el-table-column>

        <el-table-column label="分销信息" width="100">
          <template #default="scope">
            <el-tag size="default" :type="scope.row.role ? '' : 'info'">{{
              scope.row.role ? "经理" : "分销员"
            }}</el-tag>
          </template>
        </el-table-column>

        <el-table-column label="状态" width="100">
          <template #default="scope">
            <el-tag
              size="default"
              :type="scope.row.state ? 'success' : 'danger'"
              >{{ scope.row.state ? "已完成" : "未完成" }}</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column label="支付方式" width="100">
          <template #default="scope">
            <el-tag size="default">{{
              scope.row.payType ? "微信" : "支付宝"
            }}</el-tag>
          </template>
        </el-table-column>

        <el-table-column
          label="来源"
          width="200"
          prop="source"
        ></el-table-column>

        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button
              type="danger"
              size="small"
              @click="deleteItem(scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Mock from "../../mock/Mock.js";

export default {
  data() {
    return {
      //订单列表数据
      orderList: [],
      //筛选订单参数
      queryParam: {
        good: "",
        consignee: "",
        phone: "",
        name: "",
        payTime: "",
        payType: "",
        sendTime: "",
      },
      //当前选中的订单对象
      multipleSelection: [],
    };
  },

  //组件挂载时获取数据 vue2
  mounted() {
    this.orderList = Mock.getOrderList(this.$route.params.type);
  },

  //路由更新时刷新数据
  beforeRouteUpdate(to) {
    this.orderList = Mock.getOrderList(to.params.type);
  },

  methods: {
    requestData() {
      this.$message({
        type: "success",
        message: "筛选请求参数:" + JSON.stringify(this.queryParam),
      }),
        (this.orderList = Mock.getOrderList(this.$route.params.type));
    },

    //切换tab时刷新数据
    handleClick(tab) {
      this.$message({
        type: "success",
        message: "切换tab刷新数据:" + tab.props.label,
      });
      this.orderList = Mock.getOrderList(this.$route.params.type);
    },

    //清空筛选项
    clear() {
      (this.queryParam = {
        good: "",
        consignee: "",
        phone: "",
        name: "",
        payTime: "",
        payType: "",
        sendTime: "",
      }),
        (this.orderList = Mock.getOrderList(this.$route.params.type));
    },

    //导出订单
    exportData() {},

    //导出选中的发货单
    exportDispatchGoods() {},

    //处理多选
    handleSeletionChange(val) {
      this.multipleSelection = val;
    },

    //进行发货
    dispatchGoods() {
      this.$message({
        type: "success",
        message: "发货商品:" + JSON.stringify(this.multipleSelection),
      });
    },

    //删除订单
    deleteItem(item) {
      this.orderList.splice(item, 1);
    },

    //联系用户
    callUser(item) {
      this.$message({
        type: "success",
        message: "联系客户:" + item.phone,
      });
    },
  },
};
</script>
