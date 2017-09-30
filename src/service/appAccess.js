// 调用app的方法都在这里写
import store from '@/module/index/store'

var appAccessJs = {
	appOs : store.state.appOs
}

// 吊起来app登录
appAccessJs.appLogin = function(){
	this.appOs == "android" ? window.kbLogin.toLogin("&authfrom=registerFromGroup") : kbLogin("&authfrom=registerFromGroup");
}
// 吊起app认证
appAccessJs.goAuth = function(){
	this.appOs == "android" ? kbAndroid.toCertification('&authfrom=fromGroup') : toCertification('&authfrom=fromGroup');
}
// 显示分享，佣金按钮
appAccessJs.showShareBtn = function(share,pay){
	this.appOs == "android" ? window.kbLoaded.kbShareBtnShow(share,pay) : kbShareBtnShow(share,pay)
}

export default {
	appAccessJs
}