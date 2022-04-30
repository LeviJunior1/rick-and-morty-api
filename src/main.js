import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHeart, faFaceDizzy, faCircleQuestion, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faFaceDizzy, faCircleQuestion, faMars, faVenus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
