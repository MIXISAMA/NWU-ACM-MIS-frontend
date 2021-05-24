<template>
  <div class="container-fluid">
    <TopNavbar/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TopNavbar from '@/components/TopNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

@Options({
  components: {
    TopNavbar,
    TheFooter,
  },
})
export default class App extends Vue {}
</script>

<style scoped>

</style>
