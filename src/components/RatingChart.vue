<template>
  <v-chart :option="option"/>
</template>


<script>
  import {
    use
  } from "echarts/core"
  import {
    GridComponent,
    LegendComponent,
    TitleComponent,
  } from 'echarts/components'
  import {
    LineChart
  } from 'echarts/charts'
  import {
    CanvasRenderer
  } from 'echarts/renderers'

  import VChart, {
    THEME_KEY
  } from "vue-echarts"
  import {
    ref,
    defineComponent
  } from "vue"

  use([
    GridComponent,
    LineChart,
    LegendComponent,
    CanvasRenderer,
    TitleComponent,
  ])
  export default defineComponent({
    name: 'RatingChart',
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
      })
      return {
        option
      }
    }
  })
</script>