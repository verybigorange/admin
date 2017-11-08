<template>
  <div>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="作品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="作品类型">
      </el-table-column>
      <el-table-column
        prop="handle"
        label="操作">
        <template slot-scope="scope">
            <el-button type="danger" size="mini">删除</el-button>
            <el-button type="info" size="mini">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
   
  </template>

  <script>
export default {
  computed: {
    type() {
      return this.$route.query.type;
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "老虎下山",
          address: "山水"
        },
        {
          date: "2",
          name: "老虎下山",
          address: "人物"
        },
        {
          date: "3",
          name: "老虎下山",
          address: "水墨"
        },
        {
          date: "4",
          name: "老虎下山",
          address: "临摹"
        }
      ]
    };
  }
};
</script>