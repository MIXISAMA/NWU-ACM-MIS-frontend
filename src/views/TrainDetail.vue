<template>
  <!-- <router-link to="../train">
    <el-button type="botton" class="button">返回</el-button>
  </router-link> -->
  <v-chart class="chart" :option="option" />
</template>

<style scoped>
  .button {
    font-size: 15px;
    position: absolute;
    left: 90%;
    top: 12%
  }

  .chart {
    height: 470px;
    width: 1300px;
    position: absolute;
    left: 5%;
    top: 12%
  }
</style>

<script>
  import {
    use,
    init,
  } from "echarts/core";
  import {
    GridComponent,
    LegendComponent,
    TitleComponent,
  } from 'echarts/components';
  import {
    BarChart
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
    BarChart,
    LegendComponent,
    CanvasRenderer,
    TitleComponent,
  ]);

  export default defineComponent({
    components: {
      VChart
    },
    provide: {
      [THEME_KEY]: "light"
    },
    setup: () => {
      const option = ref({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        title: {
          text: 'Solving condition',
          left: '40%',
          top: '0%',
        },
        legend: {
          data: ['AC', 'WA', 'TLE', 'RE', 'CE'],
          orient: 'vertical',
          left: 'left',
          top: '13%'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ['line', 'bar', 'stack', 'tiled']
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
            name: 'AC',
            type: 'bar',
            barGap: 0,
            // labeOption 参考echart 示例
            // label: labelOption,
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 442]
          },
          {
            name: 'WA',
            type: 'bar',
            // label: labelOption,
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 412, 23]
          },
          {
            name: 'TLE',
            type: 'bar',
            // label: labelOption,
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 66, 21]
          },
          {
            name: 'RE',
            type: 'bar',
            // label: labelOption,
            emphasis: {
              focus: 'series'
            },
            data: [98, 77, 101, 99, 40, 12, 23]
          },
          {
            name: 'CE',
            type: 'bar',
            // label: labelOption,
            emphasis: {
              focus: 'series'
            },
            data: [98, 177, 101, 69, 14, 53, 52]
          }
        ]

      });

      return {
        option
      };
    }
  });
</script>