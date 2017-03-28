// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 加载muse.ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// 加载基础样式表
import './common/style/main.css'

// 在vue原型中添加$http方法等于axios
Vue.prototype.$http = axios

// 设置默认打开的页面
router.replace('message')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
