const mutations = {
  changTitle (state, { title }) {
    state.headerTitle = title
  },
  showDialog (state, {item, index}) {
    state.dialog = true
    state.activeIdx = index
    state.activeItem = item
    console.log(index)
  },
  closeDialog (state) {
    state.dialog = false
    this.$http.get('/user')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // 判断信息是自己的还是ai的，然后插入聊天队列中
  changeList (state, obj) {
    console.log(obj)
  }
  // sendValue (state, {value}) {
  //   state.messageList.push(value)
  //   console.log(state.messageList)
  // }
}
export default mutations
