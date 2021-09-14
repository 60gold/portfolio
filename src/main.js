import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from '../node_modules/vue-fullpage.js/dist/vue-fullpage.js'

Vue.config.productionTip = false

Vue.use(VueFullPage);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
