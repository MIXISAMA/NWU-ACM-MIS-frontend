<template>
  <p class="title">Welcome to NWU ACM</p>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span style="font-size:150%; font-weight:bold;">公 告 板</span>
        <router-link to="/publicity">
          <el-button style="margin-left:60%;" class="button" type="text">查看所有</el-button>
        </router-link>
      </div>
    </template>
    <div class="text">
      <router-link to="/publicity">
          <el-button style="margin-left: 3%" class="button" type="text">2021.05.03 训练公告</el-button>
      </router-link>
    </div>
    <div class="text">
      <router-link to="/publicity">
          <el-button style="margin-left: 3%;" class="button" type="text">2021.05.03 训练公告</el-button>
      </router-link>
    </div>
    <div class="text">
      <router-link to="/publicity">
          <el-button style="margin-left: 3%;" class="button" type="text">2021.05.03 训练公告</el-button>
      </router-link>
    </div>
    <div class="text">
      <router-link to="/publicity">
          <el-button style="margin-left: 3%;" class="button" type="text">2021.05.03 训练公告</el-button>
      </router-link>
    </div>
  </el-card>

  <el-table :data="tableData" stripe class="rank">
    <el-table-column prop="rank" label="排名" width="80px">
    </el-table-column>
    <el-table-column prop="name" label="ID" width="150px">
    </el-table-column>
    <el-table-column prop="score" label="分数">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          rank: '1',
          name: 'Zy',
          score: '1900'
        }, {
          rank: '2',
          name: 'XiaoyuHan',
          score: '1700'
        }, {
          rank: '3',
          name: 'KeLe',
          score: '1800'
        }, {
          rank: '4',
          name: 'PeigiZhu',
          score: '1600'
        }, {
          rank: '5',
          name: 'JoJo',
          score: '1500'
        }, {
          rank: '6',
          name: 'ZhuJiu',
          score: '1400'
        }]
      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 15px;
  }

  .title {
    margin-top: 1%;
    margin-left: 3%;
    font-size: 180%;
    font-weight: bold;
  }


  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {  
    margin-left: 3%;
    margin-top: 2%;
    float: left;
    width:30%;
    min-width:406px;
  }

  .rank {
    width:25%;
    min-width: 200px;
    margin-left: 70%;
    margin-top: 2%;
    border: 3px solid rgba(122, 119, 119, 0.034);
  }
</style>
