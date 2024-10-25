import { createApp } from 'vue'
import practicalUI from '@avilang/practical-ui'
import App from './App.vue'

const app = createApp(App)

app.use(practicalUI)
app.mount('#app')
