<template>
	<div class="insure-pdf">
		<div class="item-pos">
			<div class="item" @click="toPdfPage(0)">投保须知</div>
			<div class="item" @click="toPdfPage(1)">条款资料</div>
			<div class="item" @click="toPdfPage(2)">理赔流程</div>
			<div class="item" @click="toPdfPage(3)">常见问题</div>
		</div>
	</div>
</template>
<script>
export default {
	methods:{
		toPdfPage(index){
			window.location.href = 'http://www.dtinsure.com'
		}
	}
}
</script>
<style scoped lang="scss">
.insure-pdf{
	background-color: white;
	margin-top: .12rem;
	padding: 0 .2rem;
	color: #666;
	overflow: hidden;
	border-radius: 3px;
	
	.item-pos{
		margin-top: -1px;
		.item{
			padding: .32rem 0;
			border-top: 1px solid #dedede;
			font-size: .3rem;
			color: #666666;
			&:after{
				content: '';
				display: inline-block;
				width: .3rem;
				height: .3rem;
				background: url('../../../../assets/images/details_plan/right_arrow.png');
				background-size: cover;
				float: right;
				margin-right: .39rem;
			}
		}
	}
}
</style>