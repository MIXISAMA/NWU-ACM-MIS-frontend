import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8080/' // 开发环境
axios.defaults.xsrfCookieName = 'token'
axios.defaults.xsrfHeaderName = 'Authorization'
