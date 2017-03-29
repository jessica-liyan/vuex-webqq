import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// 初始化一些常用数据，根据vue的理念，使用到的数据都必须先进行初始化设置。
let state = {
  headerTitle: 'Message',
  face: './../../../static/img/face.jpg',
  data: [{
    id: 1,
    name: 'peter',
    head: '../../../static/img/face1.jpg',
    lastMessage: '你可以和我聊天',
    count: 0,
    time: '13:48'
  }, {
    id: 2,
    name: 'mary',
    head: '../../../static/img/face2.jpg',
    lastMessage: '你可以和我聊天1',
    count: 0,
    time: '9:48'
  }, {
    id: 3,
    name: 'mark',
    head: '../../../static/img/face3.jpg',
    lastMessage: '你可以和我聊天2',
    count: 0,
    time: '23:48'
  }],
  dialog: false,
  activeIdx: 0,
  activeItem: {},
  messageList: []
}
Vue.use(Vuex)
// 导出一个新生成的Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
