<template>
<div class="player">
	<div class="player-wrap" ref="player">
		<div class="player-box" id='player'></div>
	</div>
	<!-- 倒计时 -->
	<div class="countdown-pos" v-show="countDownVisible">
		<div class="countdown">
			{{countDown}}
		</div>
	</div>
	<img :src=iconSrc class="icon">

</div>
	
</template>
<script>
import helper from '@/utils/helper'
//import Danmu from './danmu'
export default {
	props: ['userId','startTime','limitType'],
	data(){
		return {
			danmu: '',
			player: null,
			countDown: '',
			currentDate: null,
			countDownVisible: false,
			iconSrc: require('assets/images/live/live_icon.png')
		}
	},
	methods:{
		
		GetRTime(EndTime){
			if (EndTime == 'Invalid Date'){
				return
			}
			var NowTime = new Date();
			var t =EndTime.getTime() - NowTime.getTime();
			var d=0;
			var h=0;
			var m=0;
			var s=0;
			if(t>=0){
				d=Math.floor(t/1000/60/60/24);
				h=Math.floor(t/1000/60/60%24);
				m=Math.floor(t/1000/60%60);
				s=Math.floor(t/1000%60);
				this.countDown = d + '天' + h + '时' + m + '分' + s + '秒'
				this.countDownVisible = true
			} else {
				this.countDownVisible = false
				this.$emit('toRTime')
			}
			
		}
	},
	mounted(){
		/*
		加载直播播放器
		 */
		var lpScript = helper.pageAddScript('https://player.polyv.net/livescript/liveplayer.js');
		var _this = this
		lpScript.onload = lpScript.onreadystatechange = function() { 
			if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ) { 
				_this.player = window.polyvObject('#player').livePlayer({
					'uid':'b6dbb76796',
					'vid':'132926',
					'width':'100%',
					'height':'100%',
					'param1':_this.userId,
					'param2':'testname'+_this.userId,
					'flashvars':{"is_barrage":"on"},
				});
				_this.player.s2j_onInitOver = function( ){
					//点击按钮，开始播放
					console.log('InitOver')
				}
			} 
		};
		
		this.GetRTime(new Date(this.startTime))
		var _this = this
		setInterval(function(){
			_this.GetRTime(new Date(_this.startTime))
		},1000);
	}
}
</script>
<style scoped lang="scss">
.player{
	position: relative;
	height: 100%;
	overflow: hidden;
	.player-wrap{
		position: relative;
		&:after{
			content: "";
			display: block;
			padding-top: 56.25%;
		}
	}
	.player-box{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
	.countdown-pos{
		height: .64rem;
		.countdown{
			color: white;
			text-align: center;
			margin-top: -.64rem;
			z-index: 9;
			position: relative;
			font-size: 16px;
		}
	}
	.icon{
		height:.38rem;
		width:.38rem;
		position: absolute;
		right: 12px;
		top: 12px;
	}
	
}
</style>