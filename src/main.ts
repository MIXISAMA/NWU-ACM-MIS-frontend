import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import '@/axios-init'

createApp(App)
  .use(store, key)
  .use(router)
  .mount('#app')
