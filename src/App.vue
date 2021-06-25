<template>
  <div>
    <TopNavbar/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { useStore } from '@/store/index'
import TopNavbar from '@/components/TopNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

@Options({
  components: {
    TopNavbar,
    TheFooter,
  },
})
export default class App extends Vue {
  created(): void {
    const store = useStore()
    store.dispatch('auth/fetchAuthInfo')
  }
}
</script>

<style scoped>

</style>
