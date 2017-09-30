/**
 * [mutations description]
 * 更改store中状态的唯一方法就是提交mutation
 * @type {Object}
 */
var mutations = {
  setHeaderTitle(state,title){
    state.headerTitle = title
  },
  setIsAppOpen(state,data){
  	state.isAppOpen = data
  },
  setAppOs(state,data){
  	state.appOs = data
  },
  setUserId(state,data){
  	state.userId = data
  },
  setRandom(state,data){
  	state.random = data
  },
  setIsShowHeader(state,data){
    state.isShowHeader = data
  }
}

export default mutations