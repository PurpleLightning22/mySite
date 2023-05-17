import {
  createApp
} from 'vue'
import App from './App.vue'
import '@/assets/style/main.scss'
import '@/assets/style/responsive.scss'
import store from '@/store/store'
import routers from '@/router'
const app = createApp(App)
app.use(store)
app.use(routers)
app.mount('#app')