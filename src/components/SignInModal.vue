<template>
  <center-modal
    title="登陆"
    ref="centerModal"
  >
    <SignInModalForm/>
  </center-modal>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CenterModal from '@/components/CenterModal.vue'
import SignInModalForm from '@/components/SignInModalForm.vue'

@Options({
  components: {
    CenterModal,
    SignInModalForm,
  }
})
export default class SignInModal extends Vue {
  declare $refs: {
    centerModal: CenterModal,
  }
  show(): void {
    this.$refs.centerModal.show()
  }
  hide(): void {
    this.$refs.centerModal.hide()
  }
}
</script>

<style scoped>

</style>
