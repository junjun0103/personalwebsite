import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vmodal from 'vue-js-modal' // modal : popup | dialog framwork
import '@fortawesome/fontawesome-free/css/all.css'  //fontawesome
import '@fortawesome/fontawesome-free/js/all.js' //fontawesome

Vue.use(vmodal); //modal framework
require('./assets/scss/main.scss'); // bulma framework

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
