<template>
	<div class="product-name">
		<div class="wrap">
			<div class="left">
				<div class="name">{{name}}</div>
				<div class="sell">已售出:{{sellCount}}份</div>
			</div>
			<div class="right">
				<img src="https://oss-test-hd1-02.oss-cn-hzfinance.aliyuncs.com/kbao/img/20170913/1505286137640-2074902677.png">
				<div class="btn-group">
					<div class="collect-btn" :class={active:isCollect} @click="collect"></div>
					<div class="append-btn" :class={active:isAppend} @click="append"></div>
				</div>
			</div>
		</div>
		<div class="insuer-option f-border-top-line-gray">
			<div>年龄：{{age}}周岁</div>
			<div>承保职业：{{occupation}}类</div>
			<div>保障期限：{{guaranteeperiod}}年</div>
		</div>
		<div class="intro f-border-top-line-gray">{{intro}}</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			intro: '一句话简介',
			name: '产品名称',
			sellCount: '12345',
			isCollect: false,
			isAppend: false,
			age: '18-60',
			occupation: '1-4',
			guaranteeperiod: '1',
		}
	},
	methods:{
		collect(){
			this.isCollect = !this.isCollect
		},
		append(){
			this.isAppend = !this.isAppend
		}
	}
}
</script>
<style scoped lang="scss">
@mixin before-icon($url){
	content: '';
	display: inline-block;
	width: .4rem;
	height: .4rem;
	background: url($url);
	background-size: cover;
	margin: 0 .22rem 0 0.04rem;
	vertical-align: middle;
}

.product-name{
	border-radius: 3px;
	background: white;
	padding: .12rem .2rem 0 .2rem;
	.wrap{
		display: flex;
		padding-bottom: .12rem;
		.left{
			width: 50%;
			.name{
				font-size: .34rem;
				color: #333333;
			}
			.sell{
				margin-top: .5rem;
				color: #a2a2a2;
				font-size: .26rem;
			}
		}
		.right{
			width: 50%;
			text-align: right;
			img{
				width: 2.35rem;
			}
			.btn-group{
				margin-top: .2rem;
				display: flex;
				justify-content: flex-end;
				.collect-btn{
					width: 1.15rem;
					height: .44rem;
					background: url('../../../../assets/images/product/collect.png');
					background-size: cover;
					z-index: 1;
					transform: translateX(0.2rem);
					&.active{
						background: url('../../../../assets/images/product/collected.png');
						background-size: cover;
					}
				}
				.append-btn{
					width: 1.15rem;
					height: .44rem;
					background: url('../../../../assets/images/product/add.png');
					background-size: cover;
					&.active{
						background: url('../../../../assets/images/product/added.png');
						background-size: cover;
					}
				}
			}
		}
	}
	.insuer-option{
		display: flex;
		flex-wrap: wrap;
		padding: .3rem 0;
		div{
			width: 50%;
			font-size: .26rem;
			color: #8a8a8a;
			line-height: .6rem;
			&:first-child{
				&:before{
					@include before-icon('../../../../assets/images/common/age.png')
				}
			}
			&:nth-child(2){
				&:before{
					@include before-icon('../../../../assets/images/common/zhiye.png')
				}
			}
			&:nth-child(3){
				&:before{
					@include before-icon('../../../../assets/images/common/time.png')
				}
			}
		}
	}
	.intro{
		color: #e6454a;
		font-size: .26rem;
		padding: .4rem 0 .3rem 0;
		margin-top: 1px;
	}
}
</style>