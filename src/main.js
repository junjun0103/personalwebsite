import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css'  //fontawesome
import '@fortawesome/fontawesome-free/js/all.js' //fontawesome

require('./assets/scss/main.scss'); // bulma framwork

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
