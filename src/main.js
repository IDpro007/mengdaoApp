import { createApp } from 'vue'
import './style.css'
import App from '@/views/Home/index.vue'
import router from '@/router/index'
let app = createApp(App)

app.use(router).mount('#app')

