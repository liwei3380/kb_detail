import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    host: process.operate,
    headerTitle: ' ',
    isAppOpen: true,		//是否app打开
    appOs: "ios",			//判断手机是系统，安卓，ios
    userId: "",       //用户登录标志
    random: "",       //h5判断登录状态依据之一
    isShowHeader: false,    //是否需要header模块
  },
  getters,
  mutations,
  actions
})

export default store