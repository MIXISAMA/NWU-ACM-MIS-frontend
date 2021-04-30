<template>
  <router-link to="../person-data">
    <el-button type="botton" class="button">返回</el-button>
  </router-link>
</template>

<style scoped>
  .button {
    font-size: 15px;
    position: absolute;
    left: 90%;
    top: 15%
  }
</style>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>