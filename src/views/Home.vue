<template>
  <p class="p">Welcome to NWU ACM</p>
  <div>
    <div class="block" style="width:50%;float:left;margin-right:10%;">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>我是废物中的战斗机</h4>
            <p>Kele 提交于 2021/4/22 14:51</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <el-card class="box-card" style="width:30%;margin-top:20px;">
      <template #header>
        <div class="card-header">
          <span>公告</span>
          <el-button class="button" type="text">详情</el-button>
        </div>
      </template>
      <div v-for="o in 5" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </el-card>
  </div>
  <div style="width:90%; margin:0 auto; float:left;margin-left:100px">
    <div class="box">
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <br>
    <el-carousel :interval="4000" type="card" width="100%" height="300px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="medium">
          <el-image style="width: 100%; height: 300px;" :src="url[item - 1]" :fit="fit"></el-image>
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        url: [
          'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg0.jpg',
          'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg1.jpg',
          'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg2.jpg',
          'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg3.jpg',
        ]
      }
    }
  }
</script>

<style>
  .box {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .line {
    height: 1px;
    flex-grow: 1;
    background-color: #eaeaea;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .box-card {
    width: 480px;
  }

  .p {
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.85;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>