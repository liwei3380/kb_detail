<template>
	<div class="insure-duty">
		<div class="main-item" :class="{active:isOpenDelay}">
			<div class="label">
				保障责任:
			</div>
			<div class="plan-name" :class="{active:isOpen}" @click="isOpen = !isOpen">
				{{getPlanName}}
			</div>
		</div>
		<transition name="fade">
			<div class="row-wraper" ref="rowWraper" v-show="isOpen">
				<dutyItem v-for="item in dutys" :duty = "item" :key="item.id"></dutyItem>
			</div>
		</transition>
<!-- 		<div class="row-wraper opacity" ref="rowWraperOpacity">
	<dutyItem v-for="item in dutys" :duty = "item" :key="item.id"></dutyItem>
</div> -->
	</div>
</template>
<script>
import dutyItem from './dutyItem'
export default {
	data(){
		return{
			isOpen: false,
			isOpenDelay: false,
			dutys: [{
				name: '65种重大疾病',
				id: '01',
				value: '10万',
				content: '65种重大疾病65种重大疾病65种重大疾病'
			},{
				name: '65种重大疾病',
				id: '02',
				value: '10万',
				content: '65种重大疾病65种重大疾病65种重大疾病'
			},{
				name: '65种重大疾病',
				id: '03',
				value: '10万',
				content: '65种重大疾病65种重大疾病65种重大疾病'
			}]
		}
	},
	components:{
		dutyItem,
	},
	watch:{
		isOpen:function(){
			if (!this.isOpen) {
				setTimeout(()=>{
					this.isOpenDelay = this.isOpen
				}, 50)
			} else {
				this.isOpenDelay = this.isOpen
			}
		}
	},
	computed:{
		/**
		 * 获取当前选中的计划数据
		 * @return {String} 计划名称
		 * @Author   zhanglw
		 * @DateTime 2017-09-14
		 */
		getPlanName(){
			if (this.$store.state.plan == null) {
				return
			}
			return this.$store.state.plan.name
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
	.insure-duty{
		width: 100%;
		overflow: hidden;
		color: #666666;
		box-sizing: border-box;
		.main-item{
			margin: 0rem .5rem;
			padding: .7rem 0rem;
			display: flex;
			z-index: 1;
			.label{
				width:30%;
				font-weight: 900;
			}
			.plan-name{
				width:70%;
				text-align: right;
				color: #E6454A;
				&:after{
					@include after-arrow;
				}
			}
			.active{
				&:after{
					@include after-arrow(90deg);
				}
			}
			&.active{
				border-bottom: 1px solid #dedede;
			}
		}
		.row-wraper{
			margin-left: .5rem;
			margin-right: .5rem;
			overflow: hidden;
		}
		.opacity{
			opacity: 0;
		}
	}
	.fade-enter-active{
		transition: all .25s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
		opacity:0;
	}
</style>