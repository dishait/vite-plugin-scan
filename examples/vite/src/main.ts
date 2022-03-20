import { createApp } from 'vue'
import App from './App.vue'
import { files } from 'virtual:scan'

const app = createApp(App)

console.log(files)

app.mount('#app')
