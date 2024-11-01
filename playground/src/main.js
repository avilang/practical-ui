import { createApp } from 'vue'
import practicalUI from '@avilang/practical-ui/index.js' // 引入 local 开发文件
import App from './App.vue'

const app = createApp(App)

app.use(practicalUI)
app.mount('#app')
