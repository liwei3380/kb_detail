<template>
	<div class="live-intr">
		<div class="tab">
			<div :class="{active:tabIndex==0}" @click="changeTab(0)">详情</div>
			<div :class="{active:tabIndex==1}" @click="changeTab(1)">评论</div>
		</div>
		<div class="content-wrap" v-show="tabIndex==0">
			<div class="header">
				<div v-if=!living class="title">{{theme}}</div>
				<div v-if=!living class="time">直播时间：{{startTime}}</div>
				<div v-if=!living class="pre-count">观看限制：{{limitType}}</div>
				<div v-if=living class="title active">{{theme}}</div>
				<div v-if=living class="subtitle">
					<span class="left">观看{{audienceCount}}</span>
					|
					<span class="right">评论{{commentCount}}</span>
				</div>
			</div>
			<div class="content">
				<div class="title">直播简介</div>
				<div class="text">
					{{description}}
				</div>
				<!-- <div class="imgs">
					<img src="https://oss-kbvod-in.oss-cn-hangzhou.aliyuncs.com/content_3036AED5DC19DEA2EDABA1F3988B19F8_0_1501486955.jpg">
					<img src="https://oss-kbvod-in.oss-cn-hangzhou.aliyuncs.com/content_3036AED5DC19DEA2EDABA1F3988B19F8_1_1501486955.jpg">
				</div> -->
			</div>
			<div class="appointment">
				<div class="btn" v-show="isFree" @click="toSubscribe">
					{{getBtnText}}
				</div>
			</div>
		</div>
		<!-- && isAppOpen 判断是否app打开，true 显示评论, false 不显示-->
		<Danmu v-show="tabIndex==1 && canComment " :userId=userId :liveId=liveId :lectuerId=lectuerId :toTeacher=toTeacher @login=userNumber></Danmu>
	</div>
</template>
<script>
import {dateFormat} from '@/utils/helper.js'
import Danmu from './Danmu'
export default {
	props:['living','userId','subscribe','subscribeCount','theme','canComment','startTime','isAppOpen','description','liveId','lectuerId','limitType','toTeacher'],
	data () {
		return {
			time: '',
			appointedCount: 123,
			commentCount: 123,
			audienceCount: 123,
			tabIndex: 0,
			isFree: true,
		}
	},
	computed : {
		getBtnText(){
			if (this.isFree) {
				return '免费活动'
			} else {
				if (this.subscribe == '1') {
					return '已预约'
				} else {
					return '立即预约'
				}
			}
			
		}
	},
	methods:{
		changeTab(index){
			this.tabIndex = index
		},
		toSubscribe(){
			if (this.subscribe == 0) {
				this.$emit('toSubscribe')
			}
		},
		userNumber(number){
			this.audienceCount = number
		},
	},
	components:{
		Danmu,
	}
}
</script>
<style lang="scss" scoped>
	.live-intr{
		width: 100%;
		
		margin-top: 12px;
		box-sizing: border-box;
		padding-bottom: 1.5rem;
		.tab{
			background-color: white;
			display:flex;
			div{
				width: 50%;
				text-align: center;
				font-size: .3rem;
				color: #333333;
				padding: .2rem 0;
				border-bottom: 2px solid white;
			}
			.active{
				color: #e6454a;
				border-bottom: 2px solid #e6454a;
			}
		}
		.content-wrap{
			background-color: white;
			padding: .05rem .46rem .5rem .46rem;
			.header{
				border-bottom: 1px solid #dedede;
				.title{
					font-size: .28rem;
					font-weight: 900;
					color: #333333;
					vertical-align: middle;
					&:after{
						content: '预告';
						display: inline-block;
						margin-left: 10px;
						color: #e6454a;
						font-size: .2rem;
						padding: .01rem .2rem;
						border-radius: .2rem;
						border: 1px solid #e6454a;
						vertical-align: middle;
						transform: scale(0.9);
					}
				}
				.active{
					&:after{
						content: '直播中';
						display: inline-block;
						margin-left: 10px;
						color: #e6454a;
						font-size: .2rem;
						padding: .01rem .2rem;
						border-radius: .2rem;
						border: 1px solid #e6454a;
						vertical-align: middle;
						transform: scale(0.9);
					}
				}
				.time,.pre-count{
					color: #848484;
					font-size: .26rem;
				}
				div{
					font-size:12px;
					margin: .26rem 0;
				}
			}
			.content{
				.title{
					font-size: .28rem;
					padding: .26rem 0;
					color: #333333;
					font-weight: 900;
				}
				.imgs{
					margin-top: .12rem;
					img{
						width: 100%;
					}
				}
				.text{
					font-size: .26rem;
					color: #333333;
					line-height: .38rem;
					text-indent: .52rem;
				}
			}
			.appointment{
				margin: .16rem 0 0 0;
				padding-bottom: .14rem;
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
				.btn{
					width: 50%;
					font-size: .36rem;
					text-align: center;
					margin: auto;
					color: white;
					background-color: #e6454a;
					border-radius: 5px;
					padding: .15rem 0;
					&.active{
						background-color: #bfbfbf;
					}
				}
			}
		}
	}
</style>