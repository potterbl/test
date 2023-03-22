import { createApp } from 'vue'
import App from './App.vue'
import Components from "@/components/"

const app = createApp(App)

Components.forEach(component => {
    app.component(component.name, component)
})

app
    .mount('#app')
