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
	isAuth: '/postData/coupon/isauth',			// 认证
	shareAppid: '/postData/tencent/share'
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

export default {
	getTest,
	getDemo,
	getPage,
	getPlans,
	getLiveToken,
	getUserList,
	getIsAuth,
	getShareAppid
}
