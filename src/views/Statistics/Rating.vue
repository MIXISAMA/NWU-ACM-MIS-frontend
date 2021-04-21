<template>
    <v-chart class="chart" :option="option" />
</template>

<script>
    import {
        use
    } from "echarts/core";
    import {
        GridComponent, TitleComponent
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
                title: {
                    text: "Rating Change",
                    left: "center"
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [1500, 1230, 1224, 1218, 1355, 1470, 1260],
                    type: 'line'
                }]

            });

            return {
                option
            };
        }
    });
</script>

<style scoped>
    .chart {
        height: 400px;
    }
</style>