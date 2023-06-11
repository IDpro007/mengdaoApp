import { createApp } from 'vue'
import {install} from 'vue-demi'
import App from '../src/App.vue'
import router from './router/index.js'


const app = createApp(App)
install(app);
app.use(router).mount("#app");

