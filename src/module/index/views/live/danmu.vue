<template>
	<div class="comment" ref="comment">
		<!-- 聊天显示区域 -->
		<div class="content">
			<DanmuItem v-for="item in comments" :comment=item :key=item.EVENT></DanmuItem>
		</div>
		<div class="send-box">
			<input class="send-input" type="text" v-model=comment @focus="focusActive">
			<div class="send-btn-box">
				<span class="send-btn" @click="sendComment">发送</span>
				<span class="emoji-btn" :class="{active:emojiVisible}" @click="emojiVisible = !emojiVisible;giftVisible = false"> </span>
				<span class="gift-btn" @click="giftVisible = true;emojiVisible = false"></span>
			</div>
		</div>
		<Gift v-if="giftVisible" @close="closeGift" @send="sendGift"></Gift>
		<Emoji v-show="emojiVisible" @select="selectEmoji" @del="delEmoji"></Emoji>
	</div>
</template>
<script>
import md5 from 'js-md5';
import {emotionslist} from '@/service/live/emotions.js'
import helper from '@/utils/helper.js'
import api from '@/api'
import DanmuItem from './danmuItem'
import Emoji from './emoji'
import Gift from './gift'
export default {
	data () {
		return {
			comment: '',
			socket: null,
			roomId: '',
			comments: [],
			giftVisible: false,
			emojiVisible: false,
			pic: '',
			userId: '',
			nick: '',
		}
	},
	components:{
		DanmuItem,Emoji,Gift
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
	        /*var data = JSON.stringify({
	          EVENT: 'FLOWERS',
	          nick: 'testnic',
	          roomId: this.roomId,
	          uimg: "http://livestatic.videocc.net/v_73/assets/wimages/missing_face.png"
	        });*/
			this.socket.emit('message', data); //发送消息
			this.$emit('danMu',this.comment)
			this.comments.push({
				user:{
					pic: this.pic,
					nick: this.nick,
					userId: this.userId,
				},
				time:'1506066200052',
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
			this.giftVisible = false
		},
		sendGift(index){
			this.giftVisible = false
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
					'values': [nickname, pic, userId], //昵称、头像地址、用户id
					'roomId': _this.roomId
				}));
			});
			this.socket.on('message',function(message){  //接收信息事件
		        var data = JSON.parse(message);
		        console.log(data);
		        if (data && data.EVENT) { //根据返回的不同事件类型作相应处理
		          switch (data.EVENT) {
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
		
		var socketIoScript = helper.pageAddScript('http://livestatic.videocc.net/assets/wjs/dist/socket.io.min.js')

		var time = new Date().getTime().toString().substring(0,10)
		var sign = md5(time + "polyvsign")
		var tokenUrl = 'http://api.live.polyv.net/watchtoken/gettoken?ts=' + time + '&sign=' + sign
		var params = '?ts=' + time + '&sign=' + sign
		var chatToken = ''
		this.roomId = "132926";
		var pic = 'http://livestatic.videocc.net/assets/wimages/missing_face.png';
		var chatHost = 'http://chat.polyv.net:8000',  //socket连接地址
			nickname = 'test',   //自定义用户名
			userId = 'test111111',
			chatHost2 = "http://api.chat.polyv.net:80";  //获取聊天内容地址
		var _this = this
		this.pic = pic;
		this.userId = userId;
		this.nick = nickname;
		socketIoScript.onload = function(){
			api.getLiveToken(params,function(isSuccess,data,err){
				chatToken = data
				_this.socketConnect(chatToken, chatHost, nickname, userId, pic)
			})
		}

	}
}
</script>
<style lang="scss" scoped>
.comment{
	margin: 12px 0;
	background-color: white;
	box-sizing: border-box;
	padding: 0 12px;
	.title{
		font-size: 16px;
		font-weight: 900;
		text-align: center;
		padding-top: 12px;
	}
	.content{
		box-sizing: border-box;
		width: 100%;
		max-height: 200px;
		overflow-y: scroll;
	}
	.send-box{
		display: flex;
		position: fixed;
		bottom: .16rem;
		left: 12px;
		right: 12px;
		input{
			width: 70%;
			height: .84rem;
			border-radius: 5px;
			border: 1px solid #bfbfbf;
			color: #adadad;
		}
		.send-btn-box{
			width: 30%;
			display: flex;
			justify-content: flex-end;
			.send-btn,.gift-btn,.emoji-btn{
				font-size: 12px;
				height: 20px;
				line-height: 20px;
				margin-right: 5px;
				display: inline-block;
				border: 1px solid #dedede;
				padding: 2px;
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

</style>