<template>
  <!-- <img src="./assets/logo.png">
  <div>
    
    <p>
      If Element Plus is successfully added to this project, you'll see an
      <code v-text="'<el-button>'"></code>
      below
    </p>
    <el-button type="primary">el-button</el-button>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
  <el-container style="min-width: 700px">
    <el-header style="border-bottom: 1px solid #dcdfe6;float: right;">
      <MainHeader/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import MainHeader from './components/MainHeader.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    MainHeader
  },
  created() {
    axios.interceptors.request.use((config) => {
      const token = (this as any).$cookie.getCookie('token')
      config.headers['Authorization'] = token
      return config
    })
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
