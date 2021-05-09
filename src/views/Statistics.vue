<template>
  <el-container>
    <el-aside>
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          style="width:200px;" >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>战力榜</span>
            </template>
            <router-link to="/statistics/solve-problems" class="router-link-activate">
            <el-menu-item>
              <template #title>
                <i class="el-icon-s-data"></i>
                  <span><b>刷题统计</b></span>
              </template>
            </el-menu-item>
            </router-link>
            <router-link to="/statistics/rating" class="router-link-activate">
            <el-menu-item>
              <template #title>
                <i class="el-icon-s-marketing"></i>
                  <span><b>Rating</b></span>
              </template>
            </el-menu-item>
            </router-link>
          </el-submenu>
          <router-link to="/statistics/date-arrange" class="router-link-activate">
          <el-menu-item index="2">
            <i class="el-icon-date"></i>
            <template #title>
              训练日程
            </template>
          </el-menu-item>
          </router-link>
          <router-link to="/statistics/person-data" class="router-link-activate">
          <el-menu-item index="3">
            <i class="el-icon-user"></i>
            <template #title>
              队员信息
            </template>
          </el-menu-item>
          </router-link>
          <router-link to="/statistics/train" class="router-link-activate">
          <el-menu-item index="4">
            <i class="el-icon-s-claim"></i>
            <template #title>
              训练赛
            </template>
          </el-menu-item>
          </router-link>
          <!-- 扩充main区块可视内容 -->
          <el-menu-item disabled>
          </el-menu-item>
          <el-menu-item disabled>
          </el-menu-item>
          <el-menu-item disabled>
          </el-menu-item>
          <el-menu-item disabled>
          </el-menu-item>
          <el-menu-item disabled>
          </el-menu-item>
          <el-menu-item disabled>
          </el-menu-item>
          <el-menu-item disabled>
          </el-menu-item>
          <el-menu-item disabled>
          </el-menu-item>
          <el-menu-item disabled>
          </el-menu-item>
          <el-menu-item disabled>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  export default {
    methods: {
      handleOpen(key: string, keyPath: string[]): void {
        console.log("open", key, keyPath);
      },
      handleClose(key: string, keyPath: string[]): void {
        console.log("close", key, keyPath);
      }
    }
  }
</script>

<style scoped>
.router-link-activate{
  text-decoration: none;
}
</style>