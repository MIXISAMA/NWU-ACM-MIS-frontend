<template>
  <el-scrollbar style="height:100%">
    <el-row>
      <el-col :span="6">
        <el-row style="position:relative;margin-left:15%;margin-top:3%">
          <div>
            <el-avatar shape="circle" :size="220" fit="fill"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg">
            </el-avatar>

          </div>
        </el-row>
        <el-divider content-position="right">
          <el-badge :value="Person.state" class="item"></el-badge>
        </el-divider>
        <el-row style="position:relative;margin-left:15%;margin-top:0%">
          <el-descriptions :title="Person.name" style="font-size:100%">
            <el-descriptions-item label="专业" :span="5">
              <el-divider direction="vertical"></el-divider>
              {{Person.department}}
            </el-descriptions-item>
            <el-descriptions-item label="学号" :span="5">
              <el-divider direction="vertical"></el-divider>
              {{Person.studentID}}
            </el-descriptions-item>
            <el-descriptions-item label="CFID" :span="5">
              <el-divider direction="vertical"></el-divider>
              {{Person.codeforceID}}
            </el-descriptions-item>
            <el-descriptions-item label="刷题量" :span="5">
              <el-divider direction="vertical"></el-divider>
              {{Person.solveproblems}}
            </el-descriptions-item>
            <el-descriptions-item label="所属队伍" :span="5">
              <el-divider direction="vertical"></el-divider>
              {{Person.team}}
            </el-descriptions-item>
            <el-descriptions-item label="联系邮箱" :span="5">
              <el-divider direction="vertical"></el-divider>
              {{Person.email}}
            </el-descriptions-item>
          </el-descriptions>
        </el-row>
      </el-col>
      <el-col :span="6">
        <rating-chart class="Rating"/>
        <heat-map-chart class="heat-map"/>
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

  .Rating {
    height: 400px;
    width: 900px;
    position: relative;
    left: 0%;
    top: 0%;
  }
  .heat-map {
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
    // ref,
    defineComponent
  } from "vue"
  import RatingChart from "@/components/RatingChart.vue"
  import HeatMapChart from "@/components/HeatMapChart"
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
          state: '萌新'
        },
      }
    },
    methods: {
      goBack() {
        console.log('go back');
      }
    },
    components: {
      RatingChart,
      HeatMapChart,
    },
    
  })
</script>