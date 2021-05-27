<template>
  <v-chart :option="option" />
</template>


<script lang="ts">
  import * as echarts from 'echarts/core'
  import {
    Options,
    Vue
  } from 'vue-class-component'
  import {
    TitleComponent,
    CalendarComponent,
    TooltipComponent,
    VisualMapComponent
  } from 'echarts/components'
  import {
    HeatmapChart
  } from 'echarts/charts'
  import VChart from "vue-echarts"
  import {
    CanvasRenderer
  } from 'echarts/renderers'
  import {
    ref
  } from 'vue'
  echarts.use([
    TitleComponent,
    CalendarComponent,
    TooltipComponent,
    VisualMapComponent,
    HeatmapChart,
    CanvasRenderer,
  ])
  @Options({
    components: {
      VChart,
    }
  })
  export default class HeatMap extends Vue {
    getVirtulData = (year: string) => {
      year = year || '2017';
      var date = +echarts.number.parseDate(year + '-01-01');
      var end = +echarts.number.parseDate((+year + 1) + '-01-01');
      var dayTime = 3600 * 24 * 1000;
      var data = [];
      for (var time = date; time < end; time += dayTime) {
        data.push([
          echarts.format.formatTime('yyyy-MM-dd', time, false),
          Math.floor(Math.random() * 10000)
        ]);
      }
      return data;
    }
    option = ref({
      title: {
        top: 10,
        left: '5%',
        text: 'CodeFroce HeatMap'
      },
      // tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 40,
      },
      calendar: {
        top: 85,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5
        },
        yearLabel: {
          show: false
        }
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: this.getVirtulData('2017')
      },

    });
  }
</script>