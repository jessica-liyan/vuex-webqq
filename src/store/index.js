import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 初始化一些常用数据，根据vue的理念，使用到的数据都必须先进行初始化设置。
let state = {
  headerTitle: 'Message'
}
Vue.use(Vuex)
// 导出一个新生成的Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
