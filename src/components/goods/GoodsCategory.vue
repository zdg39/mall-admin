<template>
  <div class="content-container">
    <el-container class="content-row">
      <el-button type="primary" @click="addCategory">添加分类</el-button>
    </el-container>

    <!--表格内容-->
    <div>
      <el-table
        :data="categoryList"
        tooltip-effect="dark"
        border
        style="width: 100%"
      >
        <el-table-column label="分类id" width="100" prop="id"></el-table-column>

        <el-table-column
          label="分类名称"
          width="100"
          prop="name"
        ></el-table-column>

        <el-table-column
          label="分类负责人"
          width="100"
          prop="manager"
        ></el-table-column>

        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button
              type="danger"
              size="mini"
              @click="deleteCategory(scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [],
    };
  },

  methods: {
    deleteCategory(index) {
      this.categoryList.splice(index, 1);
    },

    addCategory() {
      this.$prompt("请输入分类名称", "新增分类", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
      }).then((value) => {
        this.categoryList.push({
          id: 1000,
          name: value,
          manager: "管理员用户01",
        });
      });
    },
  },
};
</script>
