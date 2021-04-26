<template>
<el-dialog
  title="登陆/注册"
  v-model="$store.state.loginDialogVisable"
  width="600px"
  destroy-on-close
  center>
  <span>{{collegeName}}校内学生请使用<strong>{{collegeName}}统一认证系统</strong>登陆/注册</span>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="邮箱登陆" name="email-login">
      <el-form :model="emailLoginForm" :rules="rules" ref="emailLoginFormRef" label-width="100px">
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]"
        >
          <el-input v-model="emailLoginForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" :required="true">
          <el-input type="password" v-model="emailLoginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitEmailLoginForm()">登陆</el-button>
          
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="邮箱注册" name="email-register">
      <el-form :model="emailRegisterForm" status-icon :rules="rules" ref="emailRegisterFormRef" label-width="100px">
        <el-form-item
          prop="nickname"
          label="昵称"
          :rules="[
            { required: true, message: '请输入昵称', trigger: 'blur' },
          ]"
        >
          <el-input v-model="emailRegisterForm.nickname"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]"
        >
          <el-input v-model="emailRegisterForm.email"></el-input>
        </el-form-item>
        <el-form-item
          prop="code"
          label="验证码"
          :rules="[
            { required: true, message: '请输入验证码', trigger: 'blur' },
          ]"
        >
          <el-row :gutter="20">
            <el-col :span="14">
              <el-input v-model="emailRegisterForm.code"></el-input>
            </el-col>
            <el-col :span="10">
              <el-button
                :disabled="loading"
                @click="sendEmailCode()"
                style="position:absolute;right:10px;"
              >
                {{sendCodeBtnName}}
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="密码" prop="pass" :required="true">
          <el-input type="password" v-model="emailRegisterForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass" :required="true">
          <el-input type="password" v-model="emailRegisterForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitEmailRegisterForm()">注册</el-button>
          <el-button @click="resetEmailRegisterForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
  <template #footer>
    <span class="dialog-footer">

    </span>
  </template>

</el-dialog>
</template>

<script lang="ts">
// import { clearInterval, setInterval } from 'timers';
import { defineComponent, reactive, ref, toRefs, getCurrentInstance } from 'vue'
import axios from 'axios'
import config from '@/config'
import store from '@/store'

export default defineComponent({
  name: 'LoginDialog',
  // ref="emailRegisterForm"
  setup() {
    const { ctx } = getCurrentInstance() as any
    const collegeName = ref(config.COLLEGE_NAME)
    const activeName = ref('email-login')

    const loading = ref(false)
    const sendCodeBtnName = ref('向邮箱发送验证码')

    const emailRegisterFormRef = ref<any>(null)
    const emailRegisterForm = reactive({
      email: '',
      pass: '',
      checkPass: '',
      code: '',
      nickname: '',
    })
    const emailLoginFormRef = ref<any>(null)
    const emailLoginForm = reactive({
      email: '',
      pass: '',
    })

    var validatePass = (rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      if (!/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/.test(value)) {
        callback(new Error('密码长度6-20，并且同时包含字母和数字'))
      }
      callback()
    }

    var validatePass2 = (rule: any, value: string, callback: any) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== emailRegisterForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      }
      callback()
    }
    const rules = reactive({
      pass: [
        { validator: validatePass, trigger: ['change', 'blur'] }
      ],
      checkPass: [
        { validator: validatePass2, trigger: ['change', 'blur'] }
      ],
    })

    const methods = reactive({
      submitEmailRegisterForm: () => {
        (emailRegisterFormRef.value as any).validate((valid: boolean) => {
          if (!valid) {
            return false
          }
          axios.post('/user/email-register/', {
            email: emailRegisterForm.email,
            code: emailRegisterForm.code,
            password: emailRegisterForm.pass,
            nickname: emailRegisterForm.nickname,
          }).then(response => {
            store.state.loginDialogVisable = false
            ctx.$notify.success({
              title: '成功',
              message: '注册成功'
            })
          }).catch(() => {
            ctx.$notify.error({
              title: '错误',
              message: '注册失败',
            })
          })
        })
      },
      resetEmailRegisterForm: () => {
        (emailRegisterFormRef.value as any).resetFields()
      },
      submitEmailLoginForm: () => {
        (emailLoginFormRef.value as any).validate((valid: boolean) => {
          if (!valid) {
            return false
          }
          axios.post('/user/email-login/', {
            username: emailLoginForm.email,
            password: emailLoginForm.pass
          }).then(response => {
            store.state.loginDialogVisable = false
            ctx.$notify.success({
              title: '成功',
              message: '登陆成功',
            })
            ctx.$cookie.setCookie('token', response.data['token'])
            
          }).catch(error => {
            ctx.$notify.error({
              title: '错误',
              message: '登陆失败',
            })
          })
        })
      },
      sendEmailCode: () => {
        (emailRegisterFormRef.value as any).validateField('email', (errorMessage: string) => {
          if (errorMessage) {
            return false
          }
          loading.value = true
          let count = 60
          const countDown = setInterval(function () {
            if (count < 1) {
              loading.value = false
              sendCodeBtnName.value = '向邮箱发送验证码'
              clearInterval(countDown)
            } else {
              sendCodeBtnName.value = count-- + 's后可重发'
            }
          }, 1000);

          axios.post(`/user/email-verification/${emailRegisterForm.email}/`).then(response => {
            ctx.$notify.success({
              title: '成功',
              message: '验证码发送成功'
            })
          }).catch((error) => {
            if (error.response.status === 403) {
              ctx.$notify.error({
                title: '错误',
                message: '该邮箱已被使用',
              })
            } else {
              ctx.$notify.error({
                title: '错误',
                message: '邮件无法发送，请检查邮箱是否正确',
              })
            }
          })
        })
      }
    })
    
    return {
      collegeName,
      activeName,
      emailRegisterForm,
      emailRegisterFormRef,
      emailLoginForm,
      emailLoginFormRef,
      rules,
      loading,
      sendCodeBtnName,
      ...toRefs(methods),
    }
  }
})
</script>