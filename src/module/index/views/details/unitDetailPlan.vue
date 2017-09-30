<template>
	<div class="detail-plan">
		<!-- 保障计划 -->
		<div>
			<pageLayout>
				<insurePlan></insurePlan>
			</pageLayout>
		</div>
		<!-- 保障责任 -->
		<div>
			<pageLayout>
				<insureDuty></insureDuty>
			</pageLayout>
		</div>
	</div>
	
</template>
<script>
import pageLayout from './pageLayout'
import insureDuty from './insureDuty'
import insurePlan from './insurePlan'
export default {
	data(){
		return{

		}
	},
	components:{
		pageLayout,
		insurePlan,
		insureDuty
	}
}
</script>
<style>
	.detail-plan{
		background-color: #f5f5f5;
	}
</style>