<template>
  <center-modal
    title="注册用户"
    ref="centerModal"
  >
    <SignUpModalForm/>
  </center-modal>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CenterModal from '@/components/CenterModal.vue'
import SignUpModalForm from '@/components/SignUpModalForm.vue'

@Options({
  components: {
    CenterModal,
    SignUpModalForm,
  }
})
export default class SignUpModal extends Vue {
  declare $refs: {
    centerModal: CenterModal
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
