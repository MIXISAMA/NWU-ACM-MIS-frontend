import { createApp } from 'vue'
import { VueCookieNext } from 'vue-cookie-next'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import axios from 'axios'
import config from '@/config'
axios.defaults.withCredentials = true
axios.defaults.baseURL = config.BACKEND_URL
axios.defaults.xsrfCookieName = 'token' // default
axios.defaults.xsrfHeaderName = 'Authorization' // default


createApp(App)
  .use(store)
  .use(router)
  .use(VueCookieNext)
  .use(ElementPlus, { locale })
  .mount('#app')
