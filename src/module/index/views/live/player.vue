<template>
<div class="player">
	<div class="player-wrap" ref="player">
		<div class="player-box" id='player'></div>
	</div>
	<!-- 倒计时 -->
	<div class="countdown-pos">
		<div class="countdown">
			{{countDown}}
		</div>
	</div>
	<img :src=iconSrc class="icon">
	<!-- <Danmu @danMu="danMu"></Danmu> -->
</div>
	
</template>
<script>
import helper from '@/utils/helper'
//import Danmu from './danmu'
export default {
	data(){
		return {
			danmu: '',
			player: null,
			countDown: '',
			currentDate: null,
			endtime: new Date('2017-09-28 10:00:00'),
			iconSrc: require('assets/images/live/live_icon.png')
		}
	},
	methods:{
		danMu(str){
			str = '[{"msg":"'+ str +'","fontSize":"24","fontColor":"0xCCCC00","fontMode":"roll"}]';
			this.player.j2s_addBarrageMessage(str);
			this.danmu = '';
		},
		GetRTime(EndTime){
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
			}
			this.countDown = d + '天' + h + '时' + m + '分' + s + '秒'
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
					'param1':'152105133804494',
					'param2':'testname',
					'flashvars':{"is_barrage":"on"},
				});
				_this.player.s2j_onInitOver = function( ){
					//点击按钮，开始播放
					console.log('InitOver')
				}
			} 
		};
		this.GetRTime(this.endtime)
		var _this = this
		setInterval(function(){
			_this.GetRTime(_this.endtime)
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