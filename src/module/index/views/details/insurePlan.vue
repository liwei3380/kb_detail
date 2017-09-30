<template>
	<div class="insure-plan" v-show="hasPlan">
		<div class="row-wraper">
			<div class="row">
				<div class="label">{{name}}</div>
				<div class="btn-group" v-show="moreSelect">
					<div class="btn" :class="{active: plan.selected}" v-for="(plan,index) in plans" :key="plan.value" @click="clickPlanBtn(index,plan)">{{plan.name}}</div>
				</div>
			</div>
			<div class="row">
				<div class="label">保障期限</div>
				<div class="text-wraper">
					<span class="text">
						{{timeLimitSelected.name}}
					</span>
					<select v-model="timeLimitSelected">
						<option v-for="item in timeLimits" :value="item" :key="item.value">{{item.name}}</option>
					</select>
				</div>
			</div>
			<div class="row">
				<div class="label">保障年龄</div>
				<div class="text-wraper">
					<span class="text">
						{{ageSelected.name}}
					</span>
					<select v-model="ageSelected">
						<option v-for="item in ages" :value="item" :key="item.value">{{item.name}}</option>
					</select>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import api from '@/api'
export default {
	data(){
		return{
			plans:[],
			moreSelect: false,
			hasPlan: false,
			name: '保障计划',
			timeLimits:[{
				name: '一个月',
				value: '01',
			},{
				name: '二个月',
				value: '02',
			},{
				name: '三个月',
				value: '03',
			}],
			timeLimitSelected:{
				name: '二个月',
				value: '02',
			},
			ages:[{
				name: '一周岁-三周岁',
				value: '01',
			},{
				name: '十一周岁-十三周岁',
				value: '02',
			},{
				name: '三十一周岁-三十三周岁',
				value: '03',
			}],
			ageSelected:{
				name: '一周岁-三周岁',
				value: '01',
			},
		}
	},
	methods:{
		/**
		 * @param  {Number} 被点按钮索引值
		 * @param  {Object} 计划对象
		 */
		clickPlanBtn(index,plan){
			for (var i = 0; i < this.plans.length; i++) {
				this.plans[i].selected = false
			}
			this.plans[index].selected = true
			this.$store.commit('setInsurePlan',plan)
		},
		initPlan(data){
			this.plans = data
			for (var i = 0; i < this.plans.length; i++) {
				if(this.plans[i].selected == true){
					console.log(this)
					this.$store.commit('setInsurePlan',this.plans[i])
				}
			}
		}
	},
	created(){
		api.getPlans(null, (isSuccess, data, err) => {
			if (isSuccess) {
				this.initPlan(data)
			} else {
				alert('error')
				console.log(err)
			}
		})

	}
}
</script>
<style lang="scss" scoped>
	.insure-plan{
		width: 100%;
		overflow: hidden;
		color: #666666;
		box-sizing: border-box;
		border: 2px dotted #e6454a;
	}
	.row-wraper{
		margin: 0rem .5rem;
		margin-top: -1px;
	}
	.insure-plan .row{
		border-top: 1px solid #dedede;
		display: flex;
		padding: .7rem 0rem;
		.label{
			width:30%;
			font-weight: 900;
			&:before{
				width: 10px;
				height: 10px;
				background: url('../../../../assets/images/details_plan/red_dot.png');
				background-size: contain;
				display: inline-block;
				content: "";
				margin-right: .5rem;
			}
		}
		.btn-group{
			width:70%;
			text-align: right;
			font-size: 1rem;
			.btn{
				width: 4rem;
				padding: .1rem .2rem;
				border: 1px solid #595959;
				border-radius: 5px;
				text-align: center;
				display: inline-block;
				margin-right: 1rem;
			}
			.btn:last-child{
				margin-right: 0rem;
			}
			.active{
				border: 1px solid #E4474E;
				background-color: #E4474E;
				color: #ffffff;
			}
		}
		.text-wraper{
			width: 70%;
			color: #E39B2A;
			text-align: right;
			position: relative;
			select{
				position: absolute;
				top: 0;
				right: 1rem;
				width: 50%;
				opacity: 0;
			}
			&:after{
				width: 10px;
				height: 10px;
				background: url('../../../../assets/images/details_plan/right_arrow.png');
				background-size: contain;
				display: inline-block;
				content: "";
				margin: 0rem 1.2rem;
			}
		}
	}
</style>
