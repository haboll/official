import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { animateDirective } from './directives/animate'

const app = createApp(App)
app.use(router)
app.directive('animate', animateDirective)
app.mount('#app')

