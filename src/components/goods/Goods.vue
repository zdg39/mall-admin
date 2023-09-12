<template>
  <div class="content-container">
    <!--搜索条件-->
    <div>
      <!--第一排搜索条件-->
      <el-container class="content-row">
        <div class="input-tip">商品名称:</div>
        <div class="input-field">
          <el-input v-model="queryParam.name" placeholder=""></el-input>
        </div>

        <div class="input-tip">商品编号:</div>
        <div class="input-field">
          <el-input v-model="queryParam.id" placeholder=""></el-input>
        </div>

        <div class="input-tip">商品分类:</div>
        <div class="input-field">
          <el-select v-model="queryParam.category" placeholder="请选择分类">
            <el-option
              v-for="item in categories"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </div>
      </el-container>

      <!--第二排搜索条件-->
      <el-container class="content-row">
        <div class="input-tip">是否上架:</div>
        <div class="input-field">
          <el-select v-model="sellModeString" placeholder="">
            <el-option key="0" label="否" value="0"></el-option>
            <el-option key="1" label="是" value="1"></el-option>
            <el-option key="2" label="全部" value="2"></el-option>
          </el-select>
        </div>

        <div class="input-tip">是否过期:</div>
        <div class="input-field">
          <el-select v-model="expModeString" placeholder="">
            <el-option key="0" label="否" value="0"></el-option>
            <el-option key="1" label="是" value="1"></el-option>
            <el-option key="2" label="全部" value="2"></el-option>
          </el-select>
        </div>
      </el-container>
    </div>

    <!-- 按钮 -->
    <div class="content-row">
      <el-container>
        <el-button type="primary" @click="requestData">检索</el-button>
        <el-button type="primary" @click="clear">显示全部</el-button>
        <el-button type="success" @click="addGood">新增商品</el-button>
      </el-container>
    </div>

    <!--表格内容-->
    <div>
      <el-table
        :data="goodsData"
        tooltip-effect="dark"
        border
        style="width: 100%"
      >
        <el-table-column label="商品">
          <template #default="scope">
            <div style="text-align: center">
              <el-image
                :src="scope.row.img"
                style="width: 60px; height: 100px"
              />
            </div>
            <div style="text-align: center">{{ scope.row.name }}</div>
          </template>
        </el-table-column>

        <el-table-column
          label="价格"
          width="100"
          prop="price"
        ></el-table-column>

        <el-table-column
          label="销量"
          width="100"
          prop="sellCount"
        ></el-table-column>

        <el-table-column
          label="库存"
          width="100"
          prop="count"
        ></el-table-column>

        <el-table-column
          label="退款数量"
          width="100"
          prop="back"
        ></el-table-column>

        <el-table-column
          label="退款金额"
          width="100"
          prop="backPrice"
        ></el-table-column>

        <el-table-column
          label="管理员"
          width="100"
          prop="owner"
        ></el-table-column>

        <el-table-column
          label="更新时间"
          width="200"
          prop="time"
        ></el-table-column>

        <el-table-column label="操作" width="100">
          <template #default="scope">
            <el-button
              :type="operateButtonType(scope.row.state)"
              size="small"
              @click="operate(scope.$index)"
              >{{ scope.row.state ? "上架" : "下架" }}</el-button
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
      goodsData: [],
      categories: ["全部", "男装", "女装"],
      queryParam: {
        name: "",
        id: "",
        category: "",
        sellMode: 2,
        expMode: 2,
      },
    };
  },

  //响应式属性，会根据其他响应式数据的值变化而自动更新
  computed: {
    sellModeString: {
      get() {
        if (this.queryParam.sellMode == 2) {
          return "全部";
        }
        return this.queryParam.sellMode == 0 ? "否" : "是";
      },

      set(val) {
        this.queryParam.sellMode = val;
      },
    },

    expModeString: {
      get() {
        if (this.queryParam.expMode == 2) {
          return "全部";
        }
        return this.queryParam.expMode == 0 ? "否" : "是";
      },

      set(val) {
        this.queryParam.expMode = val;
      },
    },
  },

  //组件挂载时获取数据 vue2
  mounted() {
    this.goodsData = Mock.getGoodsList(this.$route.params.type);
  },

  //路由更新时刷新数据
  beforeRouteUpdate(to) {
    this.goodsData = Mock.getGoodsList(to.params.type);
  },

  methods: {
    requestData() {
      this.$message({
        type: "success",
        message: "筛选请求参数:" + JSON.stringify(this.queryParam),
      }),
        (this.goodsData = Mock.getGoodsList(this.$route.params.type));
    },

    clear() {
      this.queryParam = {
        name: "",
        id: "",
        category: "",
        sellMode: 2,
        expMode: 2,
      };
      this.goodsData = Mock.getGoodsList(this.$route.params.type);
    },

    //新增商品 跳转到新的组件
    addGood() {
      this.$router.push({
        name: "AddGood",
        params: { type: this.$route.params.type },
      });
    },

    //操作按钮的type
    operateButtonType(state) {
      if (state) {
        return "danger";
      } else {
        return "primary";
      }
    },
  },
};
</script>
