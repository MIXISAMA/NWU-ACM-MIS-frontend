<template>
  <div 
    class="btn-group"
    role="group"
    aria-label="Sign in and sign up"
  >
    <button
      type="button"
      class="btn btn-outline-dark"
      @click="showSignInModal"
    >
      登陆
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      @click="showSignUpModal"
    >
      注册
    </button>
  </div>
  <SignInModal ref="signInModal"/>
  <SignUpModal ref="signUpModal"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SignInModal from '@/components/SignInModal.vue'
import SignUpModal from '@/components/SignUpModal.vue'

@Options({
  components: {
    SignInModal,
    SignUpModal,
  },
})
export default class TopNavbarAnonymous extends Vue {
  declare $refs: {
    signInModal: SignInModal,
    signUpModal: SignUpModal,
  }
  showSignInModal(): void {
    this.$refs.signInModal.show()
  }
  showSignUpModal(): void {
    this.$refs.signUpModal.show()
  }
}
</script>

<style scoped>

</style>