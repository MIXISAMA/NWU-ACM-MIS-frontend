<template>
  <v-chart :option="option" />
</template>


<script lang="ts">
import {
  Options,
  Vue
} from 'vue-class-component'
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
  // defineComponent,
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
export default class HeatMapChart extends Vue {
  getVirtulData = (year: string) => {
    year = year || '2017';
    const date = +echarts.number.parseDate(year + '-01-01');
    const end = +echarts.number.parseDate((+year + 1) + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    let data = [];
    for (let time = date; time < end; time += dayTime) {
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
    tooltip: {},
    visualMap: {
      min: 0,
      max: 100,
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