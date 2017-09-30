<template lang="html">
	<ul class="p-list-block">
		<li class="list-main">
			<p class="list-tag"></p>
			<div class="list-head list-flex">
				<p>百万畅行航意险</p>
				<p>
				<img src="https://oss-test-hd1-02.oss-cn-hzfinance.aliyuncs.com/kbao/img/20170913/1505286040727-1373656606.png">
				</p>
			</div>
			<p class="list-warn small-font f-toe">给您和家人一份保障</p>
			<div class="list-flex list-pay f-border-top-bottom-line-gray">
				<p>￥100.00起</p>
				<p class="list-warn">推广费:<span>50%</span></p>
			</div>
			<div class="list-desc small-font">
				<p>
					<span>线上好陪</span>
					<span>一键续保</span>
				</p>
				<p>
				</p>
			</div>
			<ul class="list-more-info small-font">
				<li class="list-flex">
					<p>燃气意外</p>
					<p>10万元</p>
				</li>
				<li class="list-flex">
					<p>燃气意外</p>
					<p>20万元</p>
				</li>
				<li class="list-flex">
					<p>燃气意外</p>
					<p>100万元</p>
				</li>
			</ul>
			<p class="list-info-btn active"></p>
		</li>

		<li class="list-main">
			<p class="list-tag"></p>
			<div class="list-head list-flex">
				<p>百万畅行航意险</p>
				<p>
				<img src="https://oss-test-hd1-02.oss-cn-hzfinance.aliyuncs.com/kbao/img/20170913/1505286040727-1373656606.png">
				</p>
			</div>
			<p class="list-warn small-font f-toe">给您和家人一份保障</p>
			<div class="list-flex list-pay f-border-top-bottom-line-gray">
				<p>￥100.00起</p>
				<p class="list-warn">推广费:<span>50%</span></p>
			</div>
			<div class="list-desc small-font">
				<p>
					<span>线上好陪</span>
					<span>一键续保</span>
				</p>
				<p>
				</p>
			</div>
			<p class="list-info-btn"></p>
		</li>
		<li class="list-main">
			<p class="list-tag"></p>
			<div class="list-head list-flex">
				<p>百万畅行航意险</p>
				<p>
				<img src="https://oss-test-hd1-02.oss-cn-hzfinance.aliyuncs.com/kbao/img/20170913/1505286040727-1373656606.png">
				</p>
			</div>
			<p class="list-warn small-font f-toe">给您和家人一份保障</p>
			<div class="list-flex list-pay f-border-top-bottom-line-gray">
				<p>￥100.00起</p>
				<p class="list-warn">推广费:<span>50%</span></p>
			</div>
			<div class="list-desc small-font">
				<p>
					<span>线上好陪</span>
					<span>一键续保</span>
				</p>
				<p>
				</p>
			</div>
			<p class="list-info-btn"></p>
		</li>
	</ul>
</template>

<script>
export default{
	data(){
		return{

		}
	}
}
</script>

<style lang="scss" scoped>
$c-gray: #a2a2a2;
$c-red: #f2494e;
$c-yellow: #e39605;
$c-black: #333333;
.list-warn{color: $c-yellow}
.small-font{font-size:.28rem}

.p-list-block{
    -webkit-overflow-scrolling: touch;
  	overflow-scrolling: touch;
	color: $c-black;
	margin: .1rem .1rem 0 .1rem;
	padding-bottom: .5rem; 
	li.list-main{
		position: relative;
		background: #ffffff;
		border-radius: 5px;
		margin-bottom: .5rem;
		padding: 0 .2rem .1rem;
		display: block;
		box-shadow: 1px 2px 3px #cdcdcd;
		.list-head ,.list-warn,.list-pay,.list-desc{
			line-height: 1rem;
			z-index: 9;
		}
		.list-tag{
			position: absolute;
			background: url('../../../../assets/images/product-house/new.png') no-repeat;
			width: .85rem;
		    height: .85rem;
		    right: 0;
		    top: 0;
		    background-size: cover;
		}
		.list-info-btn{
			position: absolute;
			background: url('../../../../assets/images/product-house/moredown.png') no-repeat;
			width: 1.55rem;
		    height: .85rem;
		    right: 0;
		    bottom: -.4rem;
		    background-size: cover;
		    left: 50%;
		    margin-left: -.75rem;
		}
		.list-info-btn.active{
			background: url('../../../../assets/images/product-house/moreup.png') no-repeat;
			background-size: cover;
		}
		.list-flex{display: flex}
		.list-head{
			p{flex:65%}
			p:last-child{
				flex:35%;
				img{width: 100%;vertical-align: middle;}
			}
		}
		.list-pay{
			p:first-child{color: $c-red;font-weight: bold}
			p{flex: 1}
			p:last-child{text-align:right;margin-right:.2rem;}
		}
		.list-desc{
			position: relative;
			p{
				span:before{
					content: "";
					background: url('../../../../assets/images/product-house/choosed.png') no-repeat;
				    display: inline-block;
				    width: .35rem;
				    height: .35rem;
				    background-size: contain;
				    margin-right: .2rem;
				    vertical-align: middle;
				}
				span{margin-right: .7rem;}
			}
			p:last-child{
				position: absolute;
				background: url('../../../../assets/images/common/info.png') no-repeat;
			    right: .2rem;
			    width: .4rem;
			    height: .4rem;
			    top: .3rem;
			    background-size: contain;
			}
		}

		.list-more-info{
			padding:.12rem .2rem .15rem .23rem;
			color: $c-gray;
			.list-flex{
				line-height: .58rem;
				p{flex:1}
				p:last-child{text-align:right; }
			}
		}
	}
}
</style>