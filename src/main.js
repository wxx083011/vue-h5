import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/scss/common.scss'
import '@/utils/rem.js'
// 开启调试入口
// import Vconsole from 'vconsole'
// const vConsole = new Vconsole()
// Vue.use(vConsole)
import axios from 'axios'
import QS from 'qs'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'd2f24964568ffe6aefdae705ebbbd2b2',
  plugin: ['AMap.Geocoder'],
  v: '1.4.4',
  uiVersion: '1.0.11' // 版本号

})

// 注册请求
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.qs = QS
// vant组件全局注册
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})