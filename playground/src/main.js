import { createApp } from 'vue'
import practicalUI from 'practical-ui'
import App from './App.vue'

const app = createApp(App)

app.use(practicalUI)
app.mount('#app')
