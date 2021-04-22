<template>
  <p class="p">Welcome to Nwu Acm!</p> 
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br >
  <br>
  <br>
  <div style="width:1600px; margin:0 auto;">
    <el-carousel :interval="4000" type="card" width="800px" height="300px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="medium">
          <el-image
            style="width: 800px; height: 300px;"
            :src="url[item - 1]"
            :fit="fit"></el-image>
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
  .p{
    font-size: 50px;
    text-align:center;
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
