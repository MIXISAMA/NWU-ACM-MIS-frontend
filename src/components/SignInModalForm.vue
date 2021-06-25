<template>
  <form ref="signInForm">
    <div class="form-floating mb-3">
      <input
        v-model="signInForm.username"
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        required
      >
      <label for="floatingInput">
        邮箱
      </label>
    </div>
    <div class="form-floating mb-3">
      <input
        v-model="signInForm.password"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        pattern="^(?=.*\d)(?=.*[a-zA-Z]).{8,20}$"
        required
      >
      <label for="floatingPassword">
        密码
      </label>
    </div>
  </form>
  <div
    class="alert alert-danger"
    role="alert"
    v-show="isAlertShow"
  >
    邮箱或密码输入有误
  </div>
  <button 
    class="btn btn-primary"
    @click="signIn"
  >
    登陆
  </button>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import axios from 'axios'
import { store } from '@/store/index'
import SignInModal from './SignInModal.vue'

export default class SignInModalForm extends Vue {

  signInForm = {
    username: '',
    password: '',
  }

  isAlertShow = false

  signUpCheckValidity(): boolean {
    this.isAlertShow = false
    const signInForm = this.$refs.signInForm as HTMLFormElement
    signInForm.classList.add('was-validated')
    return signInForm.checkValidity()
  }

  signInSuccess(): void {
    const signInModal = this.$parent as SignInModal
    signInModal.hide()
    store.dispatch('auth/fetchAuthInfo')
  }

  signInError(): void {
    this.isAlertShow = true
  }

  signIn(): void {
    
    if (!this.signUpCheckValidity()) {
      return
    }

    axios.post(`/api/user/email-login/`, this.signInForm).then(() => {
      this.signInSuccess()
    }).catch(reason => {
      this.signInError()
    })

  }

}
</script>
