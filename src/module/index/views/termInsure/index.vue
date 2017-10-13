<template>
	<div class="term-insure">
		<ProductName></ProductName>
		<InsureSelect></InsureSelect>
		<div class="img-wrap">
			<img src="">
		</div>
		<InsurePdf></InsurePdf>
		<InsureBuy :unitSaleData="unitSaleData" v-if="unitSaleData" ></InsureBuy>
	</div>
</template>
<script>
import ProductName from './productName'
import InsureSelect from './insureSelect'
import InsurePdf from './insurePdf'
import InsureBuy from './insureBuy'
export default {
	data(){
		return {
			unitSaleData:""
		}
	},
	created(){
		this.unitSaleData = {
			payPrice: 3219.01,
			payPromotion: 18
		}
	},
	components:{
		ProductName,InsureSelect,InsurePdf,InsureBuy
	}
}
</script>
<style scoped lang="scss">
	.term-insure{
		margin: .2rem .1rem 0 .1rem;
		padding-bottom: 2.5rem;
		.img-wrap{
			background-color: white;
			padding: .12rem .22rem;
			margin-top: .1rem;
			border-radius: 3px;
			img{
				width: 100%;
				display: block;
				margin: .12rem auto 0 auto;
				&:after{
					content: "";
					display: block;
					padding-top: 56%;
				}
			}
		}
	}
</style>