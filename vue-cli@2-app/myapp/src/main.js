// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import router from './router/index.js'
import store from './store/index';

import 'mint-ui/lib/style.css'
import './main.scss'

Vue.config.productionTip = false  //false 开发环境

Vue.config.devtools = true  // 支持devTools
Vue.use(MintUI)
Vue.prototype.$bus= new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  
  components: { App },
  template: '<App/>'
  // components: {
  //   'v-app': App
  // }
})
