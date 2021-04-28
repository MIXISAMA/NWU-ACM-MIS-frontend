<template>
    <el-container>
        <el-header>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </el-header>
        <el-main>
            <v-chart class="chart" :option="option" />
        </el-main>
    </el-container>
</template>

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
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: 'CodeForces'
                }, {
                    value: '选项2',
                    label: 'Vjudge'
                },
                ],
                value: ''
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
                xAxis: {
                    max: 'dataMax',
                },
                yAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C', 'D', 'E'],
                    inverse: true,
                    animationDuration: 300,
                    animationDurationUpdate: 300,
                    max: 2 // only the largest 3 bars will be displayed
                },
                series: [{
                    realtimeSort: true,
                    name: 'Solved Problems',
                    type: 'bar',
                    data: [100, 200, 300, 400, 500],
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    }
                }],
                legend: {
                    show: true
                },
                animationDuration: 0,
                animationDurationUpdate: 3000,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear'

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