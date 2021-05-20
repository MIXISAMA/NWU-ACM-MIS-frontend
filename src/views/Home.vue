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
      <el-row>
        <p style="font-style: italic;">{{publicity[0].time}}</p>
        <router-link to="/publicity">
          <el-button class="button" style="margin-left:10%; margin-top:13%; font-size:15px;" type="text">{{publicity[0].title}}</el-button>
        </router-link>
      </el-row>
      <el-row>
        <p style="font-style: italic;">{{publicity[1].time}}</p>
        <router-link to="/publicity">
          <el-button class="button" style="margin-left:10%; margin-top:13%; font-size:15px;" type="text">{{publicity[1].title}}</el-button>
        </router-link>
      </el-row>
      <el-row>
       <p style="font-style: italic;">{{publicity[2].time}}</p>
        <router-link to="/publicity">
          <el-button class="button" style="margin-left:10%; margin-top:13%; font-size:15px;" type="text">{{publicity[2].title}}</el-button>
        </router-link>
      </el-row>
      <el-row>
        <p style="font-style: italic;;">{{publicity[3].time}}</p>
        <router-link to="/publicity">
          <el-button class="button" style="margin-left:10%; margin-top:13%; font-size:15px;" type="text">{{publicity[3].title}}</el-button>
        </router-link>
      </el-row>
    </el-card>
    <div style="width: 28%; min-width: 220px;">
      <el-row>
        <p style="font-size:25px;font-weight:bold;">Top Rating</p>
        <router-link to="/statistics/rating">
          <el-button style="margin-top: 40%; margin-left: 20%; font-size:15px;" type="text">完整榜单</el-button>
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
        },{
          rank: '7',
          name: 'Anonytt',
          score: '1300'
        }],
        publicity:[{
          time: '2020.01.01',
          title: '训练公告',
        },{
          time: '2020.02.01',
          title: '训练公告',
        },{
          time: '2020.03.01',
          title: '训练公告',
        },{
          time: '2020.04.01',
          title: '训练公告',
        }],
      }
    }
  }
</script>

<style scoped>

  .board_text {
    margin-left: 1%;
    font-size: 18px;
  }

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
    margin-top: 1%;
    border: 3px solid rgba(122, 119, 119, 0.034);
    min-width: 230px;
  }
</style>