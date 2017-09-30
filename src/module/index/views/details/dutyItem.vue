<template>
	<div class="row" @click="isOpen = !isOpen">
		<div class="row-main">
			<div class="label">
				{{duty.name}}
			</div>
			<div class="text" :class="{active:isOpen}">
				{{duty.value}}
			</div>
		</div>
		<transition name="fade">
			<div class="content" v-show="isOpen">
				{{duty.content}}
			</div>
		</transition>
	</div>
</template>
<script>
export default {
	props: ['duty'],
	data(){
		return{
			isOpen: false,
		}
	}
}
</script>
<style lang="scss" scoped>
	// 右边的小箭头
	@mixin after-arrow($rotate:0deg){
		width: 10px;
		height: 10px;
		background: url('../../../../assets/images/details_plan/right_arrow.png');
		background-size: contain;
		display: inline-block;
		content: "";
		margin: 0rem 1.2rem;
		transform: rotate($rotate);
	}
	.row{
		border-top: 1px solid #dedede;
		margin:0 .5rem;
		margin-top: -1px;
		padding: 0.7rem 0rem;
		.row-main{
			display: flex;
			.label{
				width:50%;
			}
			.text{
				width:50%;
				text-align: right;
				&:after{
					@include after-arrow;
				}
			}
			.active{
				&:after{
					@include after-arrow(90deg);
				}
			}
		}
		.content{
			padding: 0.7rem 0rem 0rem 0rem;
		}
	}
	.fade-enter-active {
		transition: all .25s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
		opacity:0;
	}
</style>