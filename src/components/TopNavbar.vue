<template>
  <nav class="navbar navbar-expand-md navbar-light">
    <div class="container-fluid position-relative">
      <router-link
        class="navbar-brand"
        :to="{name: 'Home'}"
      >
        NWU-ACM
      </router-link>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <div class="navbar-nav">
          <router-link
              v-for="item in topNavbarItemData"
              :key="item[0]"
              class="nav-link"
              :aria-current="isCurrentRoute(item[0])"
              :to="{name: item[0]}"
            >
            {{ item[1] }}
          </router-link>
        </div>
      </div>
      
      <div class="d-flex flex-row position-absolute top-0 end-0">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style="margin: 0px 5px 0px 0px;"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div v-if="Math.random() > 0.5">
          <TopNavbarUser/>
        </div>
        <div v-else>
          <TopNavbarAnonymous/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TopNavbarUser from '@/components/TopNavbarUser.vue'
import TopNavbarAnonymous from '@/components/TopNavbarAnonymous.vue'

@Options({
  components: {
    TopNavbarUser,
    TopNavbarAnonymous,
  }
})
export default class TopNavbar extends Vue {
  topNavbarItemData = [
    ['Announcement',  '公告'],
    ['Honor',         '历史荣誉'],
    ['Problemset',    '在线题库'],
    ['Contests',      '比赛/考试'],
    ['Rating',        '排行榜'],
    ['Groups',        '组队平台'],
    ['Statistics',    '队内统计'],
  ]
  isCurrentRoute(name: string): string | undefined {
    return this.$route.name === name ? 'page' : undefined
  }
}
</script>

<style scoped>

</style>