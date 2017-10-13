<template>
	<kbSlider :slider="sliders" animationDirect="bottomToTop" :isModalToClose="true">
		<div class="pay" @click.stop>
			<div class="title">请选择支付方式</div>
			<div class="img-wrap">
				<div class="tenpay" :class={active:!alipay} @click="alipay=false"></div>
				<div class="alipay" :class={active:alipay} @click="alipay=true"></div>
			</div>
			<div class="btn-group">
				<div class="btn-close" @click="cancel">取消</div>
				<div class="btn-next" @click="next">下一步</div>
			</div>
		</div>

	</kbSlider>
</template>
<script>
import kbSlider from '@/common/kbSlider/index'
export default {
	props: ['sliders'],
	components: {kbSlider},
	data () {
		return {
			alipay: false,
			isNext: false,
		}
	},
	methods:{
		cancel(){
			this.$emit('closePay')
		},
		next(){
			if (this.isNext) {
				return
			}
			this.$emit('confirmPay', this.alipay ? 'alipay' : 'tenpay')
			this.isNext = true
		}
	}
}
</script>
<style lang="scss" scoped>
.pay{
	width: 6.4rem;
	background: white;
	text-align: center;
	color: white;
	top: 50%;
	left: 50%;
	position: absolute;
	transform: translate(-50%, -50%);
	.title{
		background-color: #e6454a;
		height: .7rem;
		line-height: .7rem;
	}
	.img-wrap{
		display: flex;
		justify-content: center;
		padding: 1rem 0 .6rem 0;
		box-sizing: border-box;
		div{
			width: 2.14rem;
			height: 1.2rem;
			border-radius: 3px;
			&:last-child{
				margin-left: .95rem;
			}
		}
		.tenpay{
			background: url('../../../../assets/images/common/tenpay.png');
			background-size: cover;
			&.active{
				background: url('../../../../assets/images/common/tenpay-selected.png');
				background-size: cover;
			}
		}
		.alipay{
			background: url('../../../../assets/images/common/alipay.png');
			background-size: cover;
			&.active{
				background: url('../../../../assets/images/common/alipay-selected.png');
				background-size: cover;
			}
		}
	}
	.btn-group{
		display: flex;
		justify-content: center;
		padding-bottom: .5rem;
		div{
			width: 2.2rem;
			height: .6rem;
			line-height: .6rem;
			background-color: #e6454a;
			border-radius: 3px;
			&:last-child{
				margin-left: .95rem;
			}
		}
	}
}
</style>