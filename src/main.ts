import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBluesky as bluesky } from '@fortawesome/free-brands-svg-icons'
import { faGithub as github } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin as linkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBars)
library.add(bluesky)
library.add(github)
library.add(linkedin)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
