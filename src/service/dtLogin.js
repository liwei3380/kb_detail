/*
* app登录或者h5跳转登录页面
* app登录后需要认证
*/

import store from '@/module/index/store'
import urlHelper from '@/utils/urlHelper.js'
import api from '@/api'
import appJs from './appAccess.js'

console.log(store.state)
let isAppOpen = store.state.isAppOpen;
let appOs = store.state.appOs;
let userId = store.state.userId;
let host = store.state.host

function toLogin(callBackUrl){
	if (isAppOpen == true) {
		appJs.appAccessJs.appLogin();
	}else{
		let pageRandom = parseInt(90000 * Math.random() + 10000);
        localStorage.setItem("random", pageRandom);
        callBackUrl = callBackUrl ? callBackUrl : window.location.href;
        let returnUrl = urlHelper.delParam(callBackUrl,'userId')		//删除userId
        returnUrl = urlHelper.changeURLArg(callBackUrl,'random',pageRandom)	//动态修改random
        window.location.href = host.OP_TM+'/html5/loginNew/redLog.jsp?activityType=group&parentID='+userId+"&returnHref="+encodeURIComponent(returnUrl)
	}
}

//是否认证,针对app处理认证，h5认证和登录绑定在一起，不需要考虑
function goAuthorization(){
	api.getIsAuth({'userId':userId}, function(isSuccess,data,err){
		if (isSuccess == true) {
			if (data.status == 403) {
				appJs.appAccessJs.goAuth()
			}
		}else{
			console.log(err)
		}
	})
}

export default{
	toLogin,
	goAuthorization
}