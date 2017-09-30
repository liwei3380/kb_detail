<template lang="html">
	<div class="sale-bar" v-if="unitSaleData">
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
	padding: 1rem 1.5rem;
    border-top: 1px solid #d9d9d9;

	div{
		width: 50%;
	}
	.oneline{
		padding:.7rem 0;
	}
	.sale-price{
		font-size: 1.2rem;
		color: #e39b2a;

		.price-sum{
			font-size: 1.6rem;
			color: #e6454a;
			font-weight: bold;
		}
	}
	.sale-btn{
		text-align: right;
		font-size: 1.7rem;
		font-weight: bold;
		color: #ffffff;
		p{
			padding: .7rem 2.7rem;
			background: #e6454a;
			border-radius: 3px;
			display: inline-block;
		}
	}
}
</style>