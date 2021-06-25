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
        :src="avatar"
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
import { useStore } from '@/store/index'

export default class TopNavbarUser extends Vue {
  get avatar(): string {
    const store = useStore()
    return store.state.auth.avatar
  }
}
</script>

<style scoped>

</style>