// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/bootstrap.min.css'
import $ from 'jquery'
import './assets/js/bootstrap.min'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routerconfig from './router.config.js'
import './assets/src/css/home.css'
import './assets/font-awesome-4.7.0 2/css/font-awesome.min.css'

Vue.config.productionTip = false

//全局引用vur-router
Vue.use(VueRouter)

//调用路由
const router = new VueRouter(routerconfig)



/* eslint-disable no-new */
new Vue({
  $,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})


