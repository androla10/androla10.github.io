import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faUser, faBookmark, faCode, faEnvelope, faArchive } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/main.css'

library.add(faTwitter, faGithub, faLinkedin, faStackOverflow, faArchive, faDownload, faUser, faBookmark, faCode, faEnvelope)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
