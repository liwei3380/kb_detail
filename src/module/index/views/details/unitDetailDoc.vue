<template>
	<div>
		<!--这是产品详情说明页面，包含投保须知，条款资料，理赔流程，常见问题-->
		<ul class="detail-doc">
			<li class="" @click="alertMsg(0)" ref="coverNotes">投保须知：</li>
			<li class="" @click="alertMsg(1)">条款资料：</li>
			<li class="" @click="alertMsg(2)">理赔流程：</li>
			<li class="" @click="alertMsg(3)">常见问题：</li>
		</ul>
		<transition name="slide-fade">
		<div class="dialog-mosk" v-show="show" @click="closeMsg">
			<div class="dialog-wrap">
				<div class="dialog">
					{{docList[index].context}}
				</div>
			</div>
			
		</div>
		</transition>
	</div>
</template>
<script>
export default {
	data() {
		return {
			docList: [{
				context: '<p>这是投保须知这是投保须知这是投保须知这是投保须知这是投保须知这是投保须知这是投保须知这是投保须知这是投保须知这是投保须知这是投保须知这是投保须知</p>'
			},{
				context: '<p>这是条款资料这是投保须知这是投保须知这是投保须知</p>'
			},{
				context: '<p>这是理赔流程这是投保须知这是投保须知这是投保须知</p>'
			},{
				context: '<p>这是常见问题这是投保须知这是投保须知这是投保须知</p>'
			}],
			message: {
//				type:这是投保须知
			},
			show: false,
			index: '0',
			content: ''
		}
	},
	methods: {
		alertMsg(index) {
			this.show = !this.show;
			this.index = index;
		},
		closeMsg() {
			this.show = false;
		}
	},
	watch: {
		
		
	}
}
</script>
<style lang="scss" scoped="scoped">
	$white-color: #ffffff;
	$gray-color: #666666;
	$bg-color: #f5f5f5;
	ul {
		list-style: none;
	}
	.hide  {
		display: none;
	}
	.detail-doc {
		background-color: $white-color;
	}
	.detail-doc li {
		border-bottom: 1px solid #d9d9d9;
		width: 98%;
		margin: 0 auto;
		color: $gray-color;
		font-weight: 900;
		height: 2.9rem;
		line-height: 2.9rem;
		background: url(../../../../assets/images/details_plan/right_arrow.png) no-repeat right;
		background-size: 0.91rem;
	}
	.detail-doc li:last-child {
		border-bottom: none;
	}
	.dialog-mosk {
		width: 100%;
		height: 100%;
		position: fixed;
		background: $bg-color;
		top: 0;
		left: 0;
		z-index: 10;
		overflow: scroll;
		opacity: 0.9;
	}
	.dialog-wrap {
		width: 100%;
		height: 100%;
		position: relative;
		top:0;
		left: 0;
		z-index: 20;
	}
	.dialog {
		position: absolute;
		top: 0px;
		width: 96%;
		left: 2%;
		z-index: 50;
		background: $white-color;
		border: 1px solid #D9D9D9;
		margin-top: 1rem;
		
	}
	/*transition*/
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-enter-active {
		transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to {
		transform: translateY(10px);
		opacity: 0;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>

