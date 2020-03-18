// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import Element from "element-ui"
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.less'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(Element)
Vue.use(Vuex)
/* eslint-disable no-new */



const store = new Vuex.Store({
  state: {
    count: 0
  },


  getters: {

  },

  mutations: {
    increment(state) {
      console.log(state);
      state += 1
      

    },
    decrement(state) {
      console.log(state);
      state -= 1
    }

  },

  acttions: {

  }
})

new Vue({
  el: '#app',
  router,
  Element,
  components: { App },
  template: '<App/>',
  store
})