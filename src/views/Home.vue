<template>
  <el-row>
    <p class="title">Welcome to NWU ACM.</p>
    <router-link to="/publicity">
      <el-button style="margin-top:15%;margin-left:15%;" round>关于我们</el-button>
    </router-link>
  </el-row>
  <el-row>
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
        {{publicity[0].time}}
        <router-link to="/publicity">
          <el-button style="margin-left: 2%; font-size:15px;" class="button" type="text">{{publicity[0].title}}</el-button>
        </router-link>
      </div>
      <div class="text">
        {{publicity[1].time}}
        <router-link to="/publicity">
          <el-button style="margin-left: 2%; font-size:15px;" class="button" type="text">{{publicity[1].title}}</el-button>
        </router-link>
      </div>
      <div class="text">
        {{publicity[2].time}}
        <router-link to="/publicity">
          <el-button style="margin-left: 2%; font-size:15px;" class="button" type="text">{{publicity[2].title}}</el-button>
        </router-link>
      </div>
      <div class="text">
        {{publicity[3].time}}
        <router-link to="/publicity">
          <el-button style="margin-left: 2%; font-size:15px;" class="button" type="text">{{publicity[3].title}}</el-button>
        </router-link>
      </div>
    </el-card>
    <div style="width: 28%; min-width: 220px;">
      <el-row>
        <p style="font-size:20px;font-weight:bold;margin-top:0%;">Codeforces Top Rating</p>
        <router-link to="/statistics/rating">
          <el-button style="margin-left: 35%; font-size:13px;" round>完整榜单</el-button>
        </router-link>
      </el-row>
      <el-table :data="tableData" stripe class="rank">
        <el-table-column prop="rank" label="排名" width="80px">
        </el-table-column>
        <el-table-column prop="name" label="ID" width="150px">
        </el-table-column>
        <el-table-column prop="score" label="分数">
        </el-table-column>
      </el-table>
    </div>
  </el-row>
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
        }],
        publicity:[{
          time: '2020-01-01',
          title: '公告1',
        },{
          time: '2020-02-01',
          title: '公告2',
        },{
          time: '2020-03-01',
          title: '公告3',
        },{
          time: '2020-04-01',
          title: '公告4',
        }],
      }
    }
  }
</script>

<style scoped>
  .title {
    margin-top: 1%;
    margin-left: 5%;
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
    margin-left: 5%;
    margin-right: 32%;
    margin-top: 2%;
    width: 25%;
    min-width: 405px;
    height: 15%;
  }

  .rank {
    width: 70%;
    margin-top: 3%;
    border: 3px solid rgba(122, 119, 119, 0.034);
    min-width: 230px;
  }
</style>