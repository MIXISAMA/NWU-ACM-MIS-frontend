<template>
  <p class="p">Welcome to NWU ACM</p>

  <div class="block" style="margin-left:5%;margin-top:3%;width:30%;float:left;">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>公告</span>
          <router-link to="/publicity">
            <el-button class="button" type="text">详情</el-button>
          </router-link>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{'公告标题 ' + o }}</div>
    </el-card>
  </div>

  <div>
    <p style="float:left; font-weight:bold;font-size:26px;margin-left:29%;">Top Rating</p>
    <router-link to="/statistic/rating">
      <el-button class="button" type="text" style="font-size:16px;margin-left:11%;margin-top:2%;">完整榜单</el-button>
    </router-link>
    <div>
      <v-chart class="chart" :option="option" />
    </div>
  </div>

  <el-carousel :interval="4000" type="card" style="margin-top:10%;margin-left:8%;width:80%;">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="medium">
        <el-image style="width:100%;" :src="url[item - 1]" :fit="fit"></el-image>
      </h3>
    </el-carousel-item>
  </el-carousel>

</template>

<script lang="ts">
  import VChart from "vue-echarts";
  import {
    defineComponent,
    ref,
  } from 'vue'
  import {
    use
  } from 'echarts/core';
  import {
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    LegendComponent
  } from 'echarts/components';
  import {
    FunnelChart
  } from 'echarts/charts';
  import {
    CanvasRenderer
  } from 'echarts/renderers';

  use(
    [TitleComponent, ToolboxComponent, TooltipComponent, LegendComponent, FunnelChart, CanvasRenderer]
  );


  export default defineComponent({
    data() {
      return {
        url: [
          'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg0.jpg',
          'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg1.jpg',
          'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg2.jpg',
          'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg3.jpg',
        ]
      }
    },
    components: {
      VChart
    },
    setup: () => {
      const option = ref({
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c}"
        },
        series: [{
          type: 'funnel',
          left: '10%',
          top: 25,
          //x2: 80,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '100%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'center',
            fontSize: 20
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 5,
              type: 'solid'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 4
          },
          emphasis: {
            label: {
              fontSize: 30
            }
          },
          data: [{
              value: 1900,
              name: 'zytxdy'
            },
            {
              value: 1800,
              name: 'Kele'
            },
            {
              value: 1700,
              name: 'XiaoyuHan'
            },
            {
              value: 1600,
              name: 'Helloword'
            },
            {
              value: 1650,
              name: 'Libm'
            },
            {
              value: 1670,
              name: 'ZhuJiu'
            },
            {
              value: 1680,
              name: 'Mixi'
            },
          ]
        }]

      });

      return {
        option
      };
    }
  });
</script>

<style>

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

  .p {
    font-size: 300%;
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

  .chart {
    width: 500px;
    height: 500px;
    margin-left:61%;
  }
</style>