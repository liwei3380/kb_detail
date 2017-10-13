// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Lib from '@/service/Lib'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import {Loading} from '@/common/popUp';

// import Element from 'element-ui'
// import Axios from 'axios'

// Vue.use(Element)
Vue.use(Loading)

Vue.config.productionTip = false

sync(store, router);

//路由控制，用来处理一些全局状态
router.beforeEach((to, from, next) => {
  let meta = to.matched[0].meta
  let headerTitle = meta.headerTitle===undefined?'快保': meta.headerTitle
  let isShowHeader = meta.isShowHeader === undefined? false:meta.isShowHeader

  // 设置页面title内容
  document.title = headerTitle
  // 控制显示title
  store.commit('setHeaderTitle',headerTitle)
  store.commit('setIsShowHeader',isShowHeader)
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// 执行初始化工作
store.dispatch('init')
