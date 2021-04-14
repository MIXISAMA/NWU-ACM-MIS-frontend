<template>
<el-row>
  <el-col :xs="8" :sm="10" :lg="12">
    <h1 style="float: left;">{{ projectName }}</h1>
  </el-col>
  <el-col :xs="13" :sm="11" :lg="8">
    <el-menu default-active="/" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="publicity">宣传</el-menu-item>
      <el-menu-item index="oj" disabled>oj</el-menu-item>
      <el-menu-item index="team">组队</el-menu-item>
      <el-menu-item index="statistics">统计</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :xs="1" :sm="1" :lg="1">
    <el-divider direction="vertical"></el-divider>
  </el-col>
  <el-col :xs="2" :sm="2" :lg="3">
    <span>用户</span>
  </el-col>
</el-row>
</template>

<script lang="ts">
import config from '@/config'

export default {
  data() {
    return {
      projectName: config.PROJECT_NAME,
    };
  },
  methods: {
    handleSelect(key: string, keyPath: string[]) {
      console.log(key, keyPath);
    }
  }
}
</script>