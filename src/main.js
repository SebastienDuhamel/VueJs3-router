import { createApp } from 'vue'
import App from './App.vue'

import router from './router';

createApp(App)
    .use(router)//on branche notre router
    .mount('#app')
