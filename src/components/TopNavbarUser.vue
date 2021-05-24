<template>
  <div class="dropdown dropstart">
    <button 
      class="btn btn-sm btn-outline-secondary dropdown-toggle text-nowrap"
      type="button"
      id="dropdownMenuButton"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://avatars.githubusercontent.com/u/34473927?s=60&v=4"
        class="rounded"
        style="width: 1.875rem; height: 1.875rem;"
      >
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <li><a class="dropdown-item" href="#">个人页面</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">退出登陆</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class TopNavbarUser extends Vue {}
</script>

<style scoped>

</style>