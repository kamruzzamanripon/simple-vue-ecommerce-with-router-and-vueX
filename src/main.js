// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//bootstrap
window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


//Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { routes } from './router/index'
const router = new VueRouter({
  mode: 'history',
  routes
})


//VueX
import Vuex from 'vuex'
Vue.use(Vuex)
import { storage } from "./store/index"
const store = new Vuex.Store(storage)



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
