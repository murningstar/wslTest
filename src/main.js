import { createApp } from 'vue';
import app from './app.vue'
import components from './components/UI/components'
import router from './router/router';

const myApp = createApp(app)
components.forEach((component)=>myApp.component(component.name,component))
myApp
    .use(router)
    .mount('#app')