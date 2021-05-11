<template>
  <el-scrollbar style="height:100%">
    <el-row >
      <el-col :span="6">
        <el-row style="position:relative;margin-left:15%;margin-top:3%">
          <div>
            <el-avatar shape="circle" :size="220" fit="fill"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
            </el-avatar>
            <el-badge :value="Person.attribute" class="item"></el-badge>
          </div>
        </el-row>
        <el-divider></el-divider>
        <el-row style="position:relative;margin-left:15%;margin-top:0%">
          <el-descriptions :title="Person.name">
            <el-descriptions-item label="专业" :span="5">{{Person.department}}</el-descriptions-item>
            <el-descriptions-item label="学号" :span="5">{{Person.studentID}}</el-descriptions-item>
            <el-descriptions-item label="CFID" :span="5">{{Person.codeforceID}}</el-descriptions-item>
            <el-descriptions-item label="刷题量" :span="5">{{Person.solveproblems}}</el-descriptions-item>
            <el-descriptions-item label="所属队伍" :span="5">{{Person.team}}</el-descriptions-item>
            <el-descriptions-item label="联系邮箱" :span="5">{{Person.email}}</el-descriptions-item>
          </el-descriptions>
        </el-row>
      </el-col>
      <el-col :span="6">
        <v-chart class="chart" :option="option" />
      </el-col>
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
    width: 900px;
    position: relative;
    left: 0%;
    top: 0%;
  }

  .item {
    position: relative;
    margin-top: 0%;
    margin-right: 100%;
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
    data() {
      return {
        Person: {
          name: '朱旭琦',
          department: '软工',
          studentID: '2018117384',
          codeforceID: 'PeiGiZhu',
          solveproblems: '500',
          team: 'PaperMan',
          email: 'zxq@qq.com',
          attribute: 'new'
        },
      }
    },
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