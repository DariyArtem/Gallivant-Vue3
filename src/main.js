import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/container.css'
import '@/assets/css/sections/header.css'
import '@/assets/css/sections/featured.css'
import '@/assets/css/sections/categories.css'
import '@/assets/css/sections/latest.css'
import '@/assets/css/main.css'


library.add(fas, fab);

const app = createApp(App)
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('pagination', require('laravel-vue-pagination'))
    .use(store)
    .use(router)
    .mount('#app')
