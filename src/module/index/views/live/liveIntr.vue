<template>
	<div class="live-intr">
		<div class="tab">
			<div :class="{active:tabIndex==0}" @click="changeTab(0)">详情</div>
			<div :class="{active:tabIndex==1}" @click="changeTab(1)">评论</div>
		</div>
		<div class="content-wrap" v-show="tabIndex==0">
			<div class="header">
				<div v-if=!living class="title">{{name}}</div>
				<div v-if=!living class="time">直播时间：{{time}}</div>
				<div v-if=!living class="pre-count">预约人数：{{appointedCount}}</div>
				<div v-if=living class="title active">{{name}}</div>
				<div v-if=living class="subtitle">
					<span class="left">观看{{audienceCount}}</span>
					|
					<span class="right">评论{{commentCount}}</span>
				</div>
			</div>
			<div class="content">
				<div class="title">直播简介</div>
				<div class="text">
					香冷金猊，被翻红浪，起来慵自梳头。任宝奁尘满，日上帘钩。生怕离怀别苦，多少事、欲说还休。新来瘦，非干病酒，不是悲秋。
					休休，这回去也，千万遍《阳关》，也则难留。念武陵人远，烟锁秦楼。惟有楼前流水，应念我、终日凝眸。凝眸处，从今又添，一段新愁。
				</div>
				<div class="imgs">
					<img src="https://oss-kbvod-in.oss-cn-hangzhou.aliyuncs.com/content_3036AED5DC19DEA2EDABA1F3988B19F8_0_1501486955.jpg">
					<img src="https://oss-kbvod-in.oss-cn-hangzhou.aliyuncs.com/content_3036AED5DC19DEA2EDABA1F3988B19F8_1_1501486955.jpg">
				</div>
			</div>
			<div class="appointment">
				<div class="btn" :class="{active:appointed}">
					{{btnText}}
				</div>
			</div>
		</div>
		<Danmu v-show="tabIndex==1"></Danmu>
	</div>
</template>
<script>
import {dateFormat} from '@/utils/helper.js'
import Danmu from './Danmu'
export default {
	props:['living'],
	data () {
		return {
			name: '第一讲：首次直播',
			time: '',
			appointedCount: 123,
			commentCount: 123,
			audienceCount: 123,
			tabIndex: 0,
			btnText: '免费活动',
			appointed: true,
		}
	},
	created(){
		this.time = dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')
		if (this.appointed) {
			this.btnText = '已预约'
		}
	},
	methods:{
		changeTab(index){
			this.tabIndex = index
		}
	},
	components:{
		Danmu,
	}
}
</script>
<style lang="scss" scoped>
	.live-intr{
		width: 100%;
		background-color: white;
		margin-top: 12px;
		box-sizing: border-box;
		.tab{
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
			padding: .05rem .46rem;
			.header{
				border-bottom: 1px solid #dedede;
				.title{
					font-size: .28rem;
					font-weight: 900;
					color: #333333;
					&:after{
						content: '预告';
						display: inline-block;
						margin-left: 5px;
						color: #e6454a;
						font-size: .2rem;
						height: .3rem;
						padding: 0 .25rem;
						text-align: center;
						border: 1px solid #e6454a;
						border-radius: .15rem;
					}
				}
				.active{
					&:after{
						content: '直播中';
						display: inline-block;
						margin-left: 5px;
						color: #e6454a;
						font-size: .2rem;
						height: .3rem;
						padding: 0 .25rem;
						text-align: center;
						border: 1px solid #e6454a;
						border-radius: .15rem;
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