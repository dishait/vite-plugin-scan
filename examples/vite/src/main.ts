import { createApp } from 'vue'
import App from './App.vue'
import { msg } from 'virtual:scan'

const app = createApp(App)

console.log(msg)

app.mount('#app')
