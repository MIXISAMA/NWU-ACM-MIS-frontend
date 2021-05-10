<template>
  <el-scrollbar style="height:100%">
    <el-row :gutter="20" style="position:relative;margin-left:10%;margin-top:5%">
      <el-col :span="6" >
        <div>
          <el-badge value="new" class="item">
            <el-avatar shape="square" :size="220" fit="fill"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
            </el-avatar>
          </el-badge>
        </div>
      </el-col>
      <el-col :span="6">
        <el-descriptions title="姓名">
          <el-descriptions-item label="专业" :span="5">软工</el-descriptions-item>
          <el-descriptions-item label="学号" :span="5">2018117XXX</el-descriptions-item>
          <el-descriptions-item label="CF ID" :span="5">Mixi</el-descriptions-item>
          <el-descriptions-item label="刷题量" :span="5">600</el-descriptions-item>
          <el-descriptions-item label="所属队伍" :span="5">纸片人</el-descriptions-item>
          <el-descriptions-item label="联系邮箱" :span="5">XXXX@qq.com</el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <br /><br />
    <el-row style="position:relative;margin-left:6%">
      <v-chart class="chart" :option="option" />
    </el-row>
  </el-scrollbar>
</template>

<style scoped>
  .button {
    font-size: 15px;
    position: absolute;
    left: 90%;
    top: 10%
  }

  .el-scrollbar__thumb {
    display: none;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .chart {
    height: 400px;
    width: 1200px;
    position: relative;
    left: 0%;
    top: 0%;
  }
</style>

<script>
  import {
    use
  } from "echarts/core";
  import {
    GridComponent,
    LegendComponent,
    TitleComponent,
  } from 'echarts/components';
  import {
    LineChart
  } from 'echarts/charts';
  import {
    CanvasRenderer
  } from 'echarts/renderers';

  import VChart, {
    THEME_KEY
  } from "vue-echarts";
  import {
    ref,
    defineComponent
  } from "vue";

  use([
    GridComponent,
    LineChart,
    LegendComponent,
    CanvasRenderer,
    TitleComponent,
  ]);

  export default defineComponent({
    methods: {
      goBack() {
        console.log('go back');
      }
    },
    components: {
      VChart
    },
    provide: {
      [THEME_KEY]: "light"
    },
    setup: () => {
      const option = ref({
        title: {
          text: 'CodeForce Rating',
          left: '5%',
          top: '0%',
        },
        tooltip: {
          trigger: 'item',
          formatter: "{b} : {c}"
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [1250, 1230, 1224, 1200, 1350, 1470, 1360],
          type: 'line'
        }]
      });

      return {
        option
      };
    }
  });
</script>