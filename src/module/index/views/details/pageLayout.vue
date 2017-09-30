<template lang="html">
	<section class="unit-block" ref="unitBlock">
		<slot></slot>
	</section>
</template>
<script>
export default{
	data(){
		return {
			
		}
	}
}
</script>
<style lang="scss" scoped>
	.unit-block{
		background: #ffffff;
		margin-bottom: 1rem;
		border-radius: 3px;
		box-shadow: 0px 2px 5px #dddddd;
	}
</style>