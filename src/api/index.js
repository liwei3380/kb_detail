/*
* 访问接口存放位置
*/
import KBRequest from './kbRequest.js';
import HttpRequest  from '@/utils/request.js'

let operate = process.operate;
console.log('99999999',operate)

let apiData = {
	test: '/local/mock/test.json',
	demo: '/api/openapi/BaikeLemmaCardApi??scope=103&format=json&appid=379020&bk_key=关键字&bk_length=600',
	page: '/postData/car-claim/car/answern/app/carClaimOrder/orderList',
	plans: '/local/mock/plans.json',
	liveToken: operate.OP_LIVE_POLYV + '/watchtoken/gettoken',
	userList: operate.OP_CHAT_POLYV + '/front/listUsers',
	liveSendReward: operate.OP_LIVE_POLYV + '/v1/channelSetting',		// 保利威视 发送奖励消息
	isAuth: '/postData/coupon/isauth',			// 认证
	shareAppid: '/postData/tencent/share',
	productSelect: '/local/mock/pSelect.json',		//产品库右侧滑筛选列表
	productScreenSelect: '/local/mock/screenSelect.json',	//产品库首页屏幕上方筛选列表
	liveLecture: '/dtlive/live/lectuer',		// 讲师信息
	liveInfo: '/dtlive/live/info',		// 直播详情
	liveSubscribe: '/dtlive/live/subscribe',		// 直播预约
	livePay: '/dtlive/pay',		//直播支付
}

//http是重写过的规则；
//原始规则在httpRequest中
let http = new KBRequest()
let httpRequest = new HttpRequest()

function getTest(callback) {
  httpRequest.getRequest(apiData.test, null, callback)
}

function getDemo(callback){
	httpRequest.getRequest(apiData.demo, null, callback)
}

function getPage(params, callback){
	httpRequest.postRequest(apiData.page, params, callback)
}

function getPlans(params, callback){
	httpRequest.getRequest(apiData.plans, null, callback)
}

function getLiveToken(params, callback){
	httpRequest.getRequest(apiData.liveToken + params, null, callback, null)
}

function getUserList(params, callback){
	httpRequest.getRequest(apiData.userList + params, null, callback, null)
}

function getIsAuth(params, callback){
	httpRequest.postRequest(apiData.isAuth, params, callback,{'avgx':'csbt34.ydhl12s','zrt':'1dcypsz1/2jss1/2j#f00'})
}

function getShareAppid(params, callback){
	httpRequest.postRequest(apiData.shareAppid, params, callback,{'avgx':'csbt34.ydhl12s','zrt':'1dcypsz1/2jss1/2j#f00'})
}

function getProductSelect(callback) {
    httpRequest.getRequest(apiData.productSelect, null, callback)
}

function getProductScreenSelect(callback){
	httpRequest.getRequest(apiData.productScreenSelect, null, callback)
}

function getLiveLecture(params, callback){
	httpRequest.postRequest(apiData.liveLecture, params, callback, {'avgx':'csbt34.ydhl12s','zrt':'1dcypsz1/2jss1/2j#f00'})
}

function getLiveInfo(params, callback){
	httpRequest.postRequest(apiData.liveInfo, params, callback, {'avgx':'csbt34.ydhl12s','zrt':'1dcypsz1/2jss1/2j#f00'})
}

function liveSubscribe(params, callback){
	httpRequest.postRequest(apiData.liveSubscribe, params, callback, {'avgx':'csbt34.ydhl12s','zrt':'1dcypsz1/2jss1/2j#f00'})
}

function livePay(params, callback){
	httpRequest.postRequest(apiData.livePay, params, callback, {'avgx':'csbt34.ydhl12s','zrt':'1dcypsz1/2jss1/2j#f00'})
}

function liveSendReward(appendUrl, params, callback){
	httpRequest.postRequest(apiData.liveSendReward + appendUrl, params, callback)
}
export default {
	getTest,
	getDemo,
	getPage,
	getPlans,
	getLiveToken,
	getUserList,
	getIsAuth,
	getShareAppid,
	getProductSelect,
	getProductScreenSelect,
	getLiveLecture,
	getLiveInfo,
	liveSubscribe,
	livePay,
	liveSendReward,
}
