<template>
  <el-container>
    <el-main>
      <el-table :data="tableData" style="width: 90%" :row-class-name="tableRowClassName">
        <el-table-column prop="title" label="比赛" width="200">
        </el-table-column>
        <el-table-column prop="start" label="开始时间" width="180">
        </el-table-column>
        <el-table-column prop="length" label="结束时间" width="180">
        </el-table-column>
        <el-table-column prop="number" label="人数" width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" icon="el-icon-search" round></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>


<style>
  .el-table .row-color {
    background: rgb(233, 246, 248);
  }
</style>

<script scope>
  export default {
    methods: {
      tableRowClassName({
        row,
      }) {
        return 'row-color';
      },
      handleClick(row) {
        console.log(row);
        this.$router.push({
          path: '/train/' + row.title
        });
      }
    },
    data() {
      return {
        tableData: [{
            title: '五一马拉松赛',
            start: '2020-05-01',
            number: '20',
            length: '120h',
            
          }, {
            title: '五一马拉松赛',
            start: '2020-05-01',
            number: '20',
            length: '120h',
            
          },

        ]
      }
    }
  }
</script>