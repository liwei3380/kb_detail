<template lang="html">

	<article>
		<!-- 详情：产品说明 -->
		<div>
			<pageLayout>
				<unitDetailInfo />
			</pageLayout>
		</div>

		<!-- 详情：保障计划，保障责任 -->
		<div>
			<pageLayout>
				<unitDetailPlan />
			</pageLayout>
		</div>

		<!-- 详情：投保须知，条款资料，理赔流程，常见问题 -->
		<div>
			<pageLayout>
				<unitDetailDoc />
			</pageLayout>
		</div>

		<unitSaleBar :unitSaleData="unitSaleData" v-if="unitSaleData" />
	</article>
	
</template>

<script>
import pageLayout from './pageLayout'
import unitDetailInfo from './unitDetailInfo'
import unitDetailPlan from './unitDetailPlan'
import unitDetailDoc from './unitDetailDoc'
import unitSaleBar from './unitSaleBar'
export default{
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
	method:{

	},
	components:{
		unitDetailInfo,unitDetailPlan,unitDetailDoc,pageLayout,unitSaleBar
	}
}
</script>
<style lang="scss" scoped>
	article{
		height: 100%;
		background: #f5f5f5;
		padding: 1rem .5rem 5rem;
	}
</style>