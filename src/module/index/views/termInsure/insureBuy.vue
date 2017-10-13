<template lang="html">
	<div class="sale-bar f-border-top-line-gray" v-if="unitSaleData">
		<div class="sale-price">
			<p :class="[unitSaleData.payPromotion?'':'oneline','price-sum']">价格：{{unitSaleData.payPrice}}</p>
			<p v-if="unitSaleData.payPromotion">推广费：{{unitSaleData.payPromotion}}%</p>
		</div>
		<div class="sale-btn">
			<p @click="toBuy">购买</p>
		</div>
	</div>
</template>

<script>
export default{
	props: ['unitSaleData'],
	methods: {
		toBuy(){
			console.log(this.unitSaleData)
		}
	}
}
</script>

<style lang="scss" scoped>
.sale-bar{
	position: fixed;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	background: #ffffff;
	padding: .14rem .25rem;
    align-items: center;
    height: 1rem;

	div{
		width: 50%;
	}
	.oneline{
		padding:.07rem 0;
		font-size: .34rem;
		color: #e6454a;
		font-weight: 400;
	}
	.sale-price{
		font-size: .24rem;
		color: #e39b2a;

		.price-sum{
			font-size: .34rem;
			color: #e6454a;
			font-weight: 400;
		}
	}
	.sale-btn{
		text-align: right;
		font-size: .34rem;
		font-weight: 400;
		color: #ffffff;
		p{
			width: 1.8rem;
			height: .6rem;
			text-align: center;
			line-height: .6rem;
			background: #e6454a;
			border-radius: 3px;
			display: inline-block;
		}
	}
}
</style>