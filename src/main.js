import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './registerServiceWorker'

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init({})