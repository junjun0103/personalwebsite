import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vmodal from 'vue-js-modal' // modal : popup | dialog framwork
import '@fortawesome/fontawesome-free/css/all.css'  //fontawesome
import '@fortawesome/fontawesome-free/js/all.js' //fontawesome
import vueSmoothScroll from 'vue2-smooth-scroll' //smooth scroll
import VueCookies from 'vue-cookies'  //vue-cookies
import VueResource from 'vue-resource'  //http
import Axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'


require('./assets/scss/main.scss'); // bulma framework
Vue.use(vmodal); //modal framework
Vue.use(vueSmoothScroll);
Vue.use(VueCookies);
Vue.use(VueResource); //http
Vue.use(Axios);
Vue.use(VueSweetalert2);
Vue.http.interceptors.push((request,next)=>{
  console.log(request);
  if(request.method=='POST'){
    request.method='PUT';
  }
  next(response=>{
    response.json=()=>{return {messages:response.body}}
  });
});

// 30 day after, expire
Vue.$cookies.config('30d');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
