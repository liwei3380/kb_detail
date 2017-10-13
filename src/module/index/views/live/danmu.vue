<template>
	<div class="comment" ref="comment">
		<!-- 聊天显示区域 -->
		<div class="content">
			<DanmuItem v-for="item in comments" :comment=item :key=item.EVENT></DanmuItem>
		</div>
		<div class="send-box">
			<div class="send-pos">
				<input class="send-input" type="text" v-model=comment @focus="focusActive" placeholder="我来说两句">
				<div class="send-btn-box">
					<span class="send-btn" @click="sendComment">发送</span>
					<!-- <span class="emoji-btn" :class="{active:emojiVisible}" @click="emojiVisible = !emojiVisible;giftVisible = false"> </span> -->
					<span class="gift-btn" @click="sliders.show=true"></span>
				</div>
			</div>
		</div>
		<Gift :sliders="sliders" @close="closeGift" @send="sendGift"></Gift>
		<!-- <Emoji v-show="emojiVisible" @select="selectEmoji" @del="delEmoji"></Emoji> -->
		<Pay @closePay="closePay" @confirmPay="confirmPay" :sliders=paySliders></Pay>
		<div class="alipay-page" v-show=alipayVisible ref="alipay"></div>
	</div>
</template>
<script>
import md5 from 'js-md5';
/*import {emotionslist} from '@/service/live/emotions.js'*/
import helper from '@/utils/helper.js'
import api from '@/api'
import DanmuItem from './danmuItem'
/*import Emoji from './emoji'*/
import Gift from './gift'
import Pay from './pay'
import {mapGetters,mapState} from 'vuex'
import urlHelper from '@/utils/urlHelper.js'

export default {
	props: ['userId', 'liveId', 'lectuerId', 'toTeacher'],
	data () {
		return {
			comment: '',
			socket: null,
			roomId: '',
			comments: [],
			giftVisible: true,
			emojiVisible: false,
			pic: '',
			nick: '',
			sliders: {
		        show:false,
		        isNeedMask:true
		    },
		    paySliders: {
		    	show:false,
		        isNeedMask:true
		    },
		    alipayVisible: false,
		}
	},
	components:{
		DanmuItem,Gift,Pay
	},
	computed:{
	    ...mapGetters(['isLogin']),
	    ...mapState({
	        appOs:'appOs',
	        isAppOpen: 'isAppOpen'
	    }),
	},
	watch: {
		toTeacher: function(){

		}
	},
	methods:{
		sendComment(){
			if (this.comment == '') {
				return
			}
			var data = JSON.stringify({
				'EVENT': 'SPEAK',
				'values': [this.comment],
				'roomId': this.roomId
			});
			this.socket.emit('message', data); //发送消息
			this.$emit('danMu',this.comment)
			this.comments.push({
				user:{
					pic: this.pic,
					nick: this.nick,
					userId: this.userId,
				},
				time: new Date().getTime(),
				values: [this.comment],
			})
			this.comment = ''
		},
		/**
		 * 获取当前用户列表
		 * @param    {String}   chathost2 url
		 * @Author   zhanglw
		 * @DateTime 2017-09-20
		 */
		getOnlineUserList(params){
			api.getLiveToken(params,function(isSuccess,data,err){
				console.log(data)
			})
		},
		closeGift(){
			this.sliders.show = false
		},
		sendGift(money,msg){
			// 选择微信还是支付宝支付
			this.paySliders.show = true
			this.money = money
			this.msg = typeof msg == 'undefined' ? '' : msg
		},
		closePay(){
			this.paySliders.show = false
		},
		confirmPay(payType){
			// console.log(pay)
			// this.paySliders.show = false
			// this.sliders.show = false
			// return
			this.money = 0.01
			if (payType == 'alipay') {
				//支付宝支付
				let params = {
					payType: payType,
					payCode: 1,
					liveId: this.liveId,
					lectuerId: this.lectuerId,
					money: this.money,
					message: this.msg,
					userId: this.userId
				}
				var _this = this
				api.livePay(params, function(isSuccess, data, err){
					if (isSuccess) {
						// 请求成功
						if (data.status==200) {
							// 返回了支付宝form
							_this.alipayVisible = true
							_this.$refs.alipay.innerHTML = data.body.param
							// 执行提交
							document.forms['alipaysubmit'].submit();
							return
						} else {
							// 返回数据失败
							alert(data.message)
						}
					} else {
						// 请求失败
						alert("请求失败")
					}
				})
			} else {
				//微信支付
				let params = {
					payType: payType,
					payCode: 1,
					liveId: this.liveId,
					lectuerId: this.lectuerId,
					money: this.money,
					message: this.msg,
					userId: this.userId
				}
				var _this = this
				api.livePay(params, function(isSuccess, data, err){
					if (isSuccess) {
						// 请求成功
						if (data.status==200) {
							console.log(data)
							return
						} else {
							// 返回数据失败
							alert(data.message)
						}
					} else {
						// 请求失败
						alert("请求失败")
					}
				})
			}
		},
		delEmoji(){
			var comment = this.comment.split('')
			var del = comment.splice(-1,1)
			if (del[0] == ']') {
				while(del[0] != '['){
					del = comment.splice(-1,1)
				}
			}
			this.comment = comment.join('')
		},
		selectEmoji(item){
			this.comment = this.comment + '[' + item.title + ']'
		},
		/**
		 * socket连接成功
		 * @param    {String}   chatToken  token
	     * @param    {String}   chatHost   地址
	     * @param    {String}   nickname   昵称
	     * @param    {String}   userId     
	     * @param    {String}   pic        头像地址
	     * @Author   zhanglw
	     * @DateTime 2017-09-20
	     */
	    socketConnect(chatToken, chatHost, nickname, userId, pic){
	    	var supportsWebSockets = 'WebSocket' in window || 'MozWebSocket' in window;
			if(supportsWebSockets)
			{
				this.socket = window.io.connect(chatHost, {
					'query': 'token=' + chatToken,
					'transports' : ['websocket']
				});
			}
			else
			{
				this.socket = window.io.connect(chatHost, {
					'query': 'token=' + chatToken,  
					'transports' : ['polling']
				});
			}
			var _this = this
			this.socket.on('connect', function() {
				//连接服务器成功
				console.info('success')
				/*params = 'roomId=' + roomId + '&page=1&len=100'
				this.getOnlineUserList(params);*/
				_this.socket.emit('message', JSON.stringify({ //用户登录
					'EVENT': 'LOGIN',
					'values': [nickname, pic, _this.userId], //昵称、头像地址、用户id
					'roomId': _this.roomId
				}));
			});
			this.socket.on('message',function(message){  //接收信息事件
		        var data = JSON.parse(message);
		        console.log(data)
		        if (data && data.EVENT) { //根据返回的不同事件类型作相应处理
		          switch (data.EVENT) {
		          	case 'LOGIN': // 登录
		              break;
		            case 'LOGOUT': // 登出
		              break;
		            case 'CLOSEROOM': // room closed
		              break;
		            case 'GONGGAO': //系统公告
		                break;
		            case 'SPEAK': // 用户发言
		              //addList(data);  //将用户发言生成dom添加到页面
		              _this.comments.push(data)
		              break;
		            case 'REWARD': //奖励信息
		                break;
		            case 'QUESTION':
		                break;
		            case 'CLOSE_QUESTION':
		                break;
		            case 'ANSWER':
		                 break;
		            case 'ERROR': // 出错了
		              break;
		            case 'KICK': // 用户被踢
		              break;
		            case 'REMOVE_HISTORY': //清空聊天记录
		              //$talk.empty();
		              break;
		            case 'CLOSE_DANMU'://关闭弹幕
		              break;
		            default:
		              break;
		          }
		        }
	      	});
	    },
	    focusActive(){
	    	this.giftVisible = false;
	    	this.emojiVisible = false;
	    }
	},
	mounted(){
		
		var socketIoScript = helper.pageAddScript('https://tm.kbao123.com/h5/live/socket.io.min.js')

/*		var time = new Date('2017-10-23').getTime().toString().substring(0,10)
		var sign = md5(time + "polyvsign")
		var tokenUrl = 'http://api.live.polyv.net/watchtoken/gettoken?ts=' + time + '&sign=' + sign
		var params = '?ts=' + time + '&sign=' + sign
		var chatToken = ''*/
		this.roomId = "132926";
		var pic = 'http://livestatic.videocc.net/assets/wimages/missing_face.png';
		var chatHost = 'https://chat.polyv.net:8001',  //socket连接地址
			nickname = 'test';   //自定义用户名
		var _this = this
		this.pic = pic;
		this.nick = nickname;
		
		socketIoScript.onload = function(){
			_this.socketConnect('', chatHost, nickname, _this.userId, pic)
		}

	}
}
</script>
<style lang="scss" scoped>
.comment{
	background-color: white;
	box-sizing: border-box;
	padding: 0 .32rem 0 .44rem;
	.title{
		font-size: 16px;
		font-weight: 900;
		text-align: center;
		padding-top: 12px;
	}
	.content{
		box-sizing: border-box;
		width: 100%;
		/* max-height: 400px; */
		overflow-y: scroll;
	}
	.send-box{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #f5f5f5;
		.send-pos{
			margin: .12rem;
			display: flex;
			input{
				box-sizing: border-box;
				width: 90%;
				height: .84rem;
				border-radius: 5px;
				border: 1px solid #bfbfbf;
				color: #adadad;
				padding: .28rem .26rem;
			}
			.send-btn-box{
				box-sizing: border-box;
				height: .84rem;
				padding-top: .18rem;
				display: flex;
				justify-content: flex-end;
				.send-btn,.gift-btn,.emoji-btn{
					font-size: 12px;
					/*margin-right: 5px;*/
					display: inline-block;
					/*border: 1px solid #dedede;*/
					vertical-align: middle;
				}
				.send-btn{
					width: .88rem;
					height: .47rem;
					line-height: .47rem;
					text-align: center;
					background-color: #E6454B;
					color: #ffffff;
					border-radius: 5px;
					margin: 0 .1rem;
				}
				.gift-btn{
					width: .44rem;
					height: .47rem;
					background: url(../../../../assets/images/live/gift_icon.png);
					background-size: cover;
				}
				.emoji-btn{
					width: 20px;
					background: url(http://livestatic.videocc.net/assets/wimages/icon-emotion.png);
					background-size: cover;
					vertical-align: middle;
					&.active{
						background: url(http://livestatic.videocc.net/assets/wimages/icon-keyboard.png);
						background-size: cover;
					}
				}
			}
		}
	}
	.alipay-page{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
}

</style>