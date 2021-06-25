<template>
  <form ref="signUpForm">
    <div class="mb-3">
      <label for="signUpNicknameInput">
        昵称
      </label>
      <input
        v-model="signUpForm.nickname"
        type="text"
        class="form-control"
        id="signUpNicknameInput"
        pattern="^.{3,20}$"
        required
      >
      <div class="form-text">
        3-20个字符。
      </div>
    </div>
    <div 
      ref="signUpEmailDiv"
      class="mb-3"
    >
      <label for="signUpEmailInput">
        邮箱
      </label>
      <input
        v-model="signUpForm.email"
        type="email"
        class="form-control"
        id="signUpEmailInput"
        ref="signUpEmailInput"
        oninput="this.setCustomValidity('')"
        required
      >
      <div class="form-text">
        西大本校生请使用西大学生邮箱注册（学号+@stumail.nwu.edu.cn）。
      </div>
      <div class="invalid-feedback">
        {{ emailErrorMsg }}
      </div>
    </div>
    <div class="mb-3">
      <label for="signUpVerificationInput">
        验证码
      </label>
      <div class="input-group">
        <input
          v-model="signUpForm.code"
          type="text"
          class="form-control"
          id="signUpVerificationInput"
          ref="signUpVerificationInput"
          oninput="this.setCustomValidity('')"
          pattern="^[A-Za-z0-9]{6}$"
          required
        >
        <button
          v-if="countDown == 0"
          class="btn btn-outline-secondary"
          type="button"
          @click="sendVerification"
        >
          向邮箱发送验证码
        </button>
        <button
          v-else
          class="btn btn-outline-secondary"
          type="button"
          disabled
        >
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          {{ countDown }}s后可再次发送
        </button>
        <div class="invalid-feedback">
          {{ VerificationErrorMsg }}
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="signUpPasswordInput">
        密码
      </label>
      <input
        v-model="signUpForm.password"
        type="password"
        class="form-control"
        id="signUpPasswordInput"
        @input="checkRepeatPassword"
        pattern="^(?=.*\d)(?=.*[a-zA-Z]).{8,20}$"
        required
      >
      <div class="form-text">
        密码8-20位，同时包含数字和字母。
      </div>
    </div>
    <div class="mb-3">
      <label for="signUpRepeatPasswordInput">
        再次确认密码
      </label>
      <input
        @input="checkRepeatPassword"
        type="password"
        class="form-control"
        id="signUpRepeatPasswordInput"
        ref="signUpRepeatPasswordInput"
        required
      >
      <div class="invalid-feedback">
        {{ repeatPasswordErrorMsg }}
      </div>
    </div>
  </form>
  <button
    class="btn btn-primary"
    @click="signUp"
  >
    注册
  </button>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import axios from 'axios'

import SignUpModal from './SignUpModal.vue'
import { store } from '@/store/index'
import { AuthState } from '@/store/modules/auth'

export default class SignUpModalForm extends Vue {

  signUpForm = {
    nickname: "",
    email: "",
    password: "",
    code: "",
  }

  repeatPasswordErrorMsg = ""
  emailErrorMsg = ""
  VerificationErrorMsg = ""

  countDown = 0
  countDownID!: number

  checkRepeatPassword(): void {
    const repeatPasswordInput = this.$refs.signUpRepeatPasswordInput as HTMLInputElement
    repeatPasswordInput.setCustomValidity('')
    if (!repeatPasswordInput.checkValidity()) {
      this.repeatPasswordErrorMsg = repeatPasswordInput.validationMessage
      return
    }
    if (repeatPasswordInput.value != this.signUpForm.password) {
      repeatPasswordInput.setCustomValidity('密码输入不一致')
    }
    this.repeatPasswordErrorMsg = repeatPasswordInput.validationMessage
  }

  sendVerificationCheckValidity(): boolean {
    const emailDiv = this.$refs.signUpEmailDiv as HTMLDivElement
    const emailInput = this.$refs.signUpEmailInput as HTMLInputElement
    emailDiv.classList.add('was-validated')
    emailInput.setCustomValidity('')
    this.emailErrorMsg = emailInput.validationMessage
    return emailInput.checkValidity()
  }

  sendVerificationCountDownInterval(): void {
    if (this.countDown == 0) {
      clearInterval(this.countDownID)
      return
    }
    this.countDown--
  }

  sendVerificationCountDown(): void {
    this.countDown = 60
    this.countDownID = setInterval(this.sendVerificationCountDownInterval, 1000)
  }

  sendVerificationError(errorMsg: string): void {
    this.emailErrorMsg = errorMsg
    const emailInput = this.$refs.signUpEmailInput as HTMLInputElement
    emailInput.setCustomValidity(errorMsg)
  }

  sendVerification(): void {

    if (!this.sendVerificationCheckValidity()) {
      return
    }

    this.sendVerificationCountDown()
  
    axios.post(`/api/user/email-verification/${this.signUpForm.email}/`).catch(reason => {
      const res = reason.response
      if (res.status == 403 || res.status == 412) {
        this.sendVerificationError(res.data.detail)
      } else {
        console.error(res.response)
      }
    })
  }

  signUpCheckValidity(): boolean {
    const signUpForm = this.$refs.signUpForm as HTMLFormElement
    signUpForm.classList.add('was-validated')
    return signUpForm.checkValidity()
  }

  signUpVerificationError(errorMsg: string): void {
    this.VerificationErrorMsg = errorMsg
    const verificationInput = this.$refs.signUpVerificationInput as HTMLInputElement
    verificationInput.setCustomValidity(errorMsg)
  }

  signUpSuccess(): void {
    const signUpModal = this.$parent as SignUpModal
    signUpModal.hide()
    store.dispatch('auth/fetchAuthInfo')
  }

  signUp(): void {

    if (!this.signUpCheckValidity()) {
      return
    }

    axios.post(`/api/user/email-register/`, this.signUpForm).then(() => {
      this.signUpSuccess()
    }).catch(reason => {
      const res = reason.response
      if (res.status == 403) {
        this.signUpVerificationError(res.data.detail)
      } else {
        console.error(res.response)
      }
    })

  }
}
</script>
