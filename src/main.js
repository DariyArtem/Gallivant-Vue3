import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(fas, fab);

const app = createApp(App)
app
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
