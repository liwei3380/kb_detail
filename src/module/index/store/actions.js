import urlHelper from '@/utils/urlHelper.js'
/*
* 路由访问，全局控制的内容
* action类似于mutation，不同在于
* action提交的事mutation，而不是直接的变更状态
* action中可以包含任意异步操作
*/
var actions = {
	init({state,commit,getters}){
		// 判断当前是否是app打开的页面
		let userAgent = navigator.userAgent;
		let isAppOpen = userAgent.indexOf("kuaibao") !== -1 ? true : false;
		let appOs = userAgent.toLowerCase().indexOf("android") !== -1 ? "android":"ios";
		commit('setIsAppOpen',isAppOpen);		//是否是app打开
		commit('setAppOs',appOs);				//当前手机的操作系统
		commit('setUserId',urlHelper.queryString('userId'));
		commit('setRandom',urlHelper.queryString('random'));

		
	}
}

export default actions