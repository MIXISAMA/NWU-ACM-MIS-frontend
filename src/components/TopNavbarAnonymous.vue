<template>
  <div 
    class="btn-group"
    role="group"
    aria-label="Sign in and sign up"
  >
    <button
      type="button"
      class="btn btn-outline-dark"
    >
      登陆
    </button>
    <button
      type="button"
      class="btn btn-secondary"
    >
      注册
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class TopNavbarAnonymous extends Vue {}
</script>

<style scoped>

</style>