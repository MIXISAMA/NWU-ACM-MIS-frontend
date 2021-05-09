<template>
  <el-container>
    <el-main>
      <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="title" label="比赛" width="200">
        </el-table-column>
        <el-table-column prop="start" label="开始时间" width="180">
        </el-table-column>
        <el-table-column prop="number" label="人数" width="180">
        </el-table-column>
        <el-table-column prop="length" label="时长" width="180">
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>


<style>
  .el-table .next-row {
    background: rgb(179, 247, 173);
  }

  .el-table .finished-row {
    background: #ecc886;
  }
</style>

<script scope>
  export default {
    methods: {
      tableRowClassName({
        row,
        rowIndex
      }) {
        if (rowIndex === 0) {
          return 'next-row';
        } 
        return 'finished-row';
      },
      handleClick(row) {
        console.log(row);
        this.$router.push({
          path: 'train/' + row.title
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