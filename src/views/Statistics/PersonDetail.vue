<template>
  <router-link to="../person-data">
    <el-button type="botton" class="button">返回</el-button>
  </router-link>
  <el-scrollbar style="height:100%">
    <el-row :gutter="20">
      <el-col :span="6">
        <div>
          <el-avatar shape="square" :size="200" fit="fill"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
          </el-avatar>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          姓名:
        </div>
        <br />
        <div>
          学号:
        </div>
        <br />
        <div>
          专业:
        </div>
        <br />
        <div>
          联系邮箱:
        </div>
        <br />
        <div>
          所属队伍:
        </div>
        <br />
      </el-col>
    </el-row>
    <br /><br />
    <el-row>
      <v-chart class="chart" :option="option" />
    </el-row>
    </el-scrollbar>
</template>

<style scoped>
  .button {
    font-size: 15px;
    position: absolute;
    left: 90%;
    top: 15%
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
    width: 1000px;
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
          text: 'CodeForce ID',
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