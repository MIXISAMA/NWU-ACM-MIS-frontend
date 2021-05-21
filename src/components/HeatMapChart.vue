<template>
  <v-chart :option="option" />
</template>


<script lang="ts">
  import * as echarts from 'echarts/core'
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
    defineComponent,
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
  export default defineComponent({
    name: 'HeatMapChart',
    components: {
      VChart
    },
    setup: () => {
      var getVirtulData = (year: string) => {
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
      const option = ref({
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
          data: getVirtulData('2017')
        },

      });

      return {
        option
      };
    }
  });
</script>