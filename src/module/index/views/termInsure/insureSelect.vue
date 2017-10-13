<template>
	<div class="insure-select">
		<div class="title">投保选择</div>
		<selectOption v-for="item in insureOptionList" :insuerOption=item  :options=options :key=item.code @changeOption=changeOption></selectOption>
	</div>
</template>
<script>

import SelectOption from './selectOption'
export default {
	data(){
		return {
			insureOptionList:[
				{ "code":"birthday","name":"出生日期","type":"1"},
				{ "code":"sex","name":"被保人性别","type":"2","level":"1"},
				{ "code":"guarantee","name":"保障期间","type":"2","level":"1"},
				{ "code":"payment","name":"缴费期限","type":"2","level":"1"},
				{ "code":"area","name":"区域","type":"2","level":"2"},
				{ "code":"coverage","name":"保额","type":"3"}
			],
			selectData: null,
			options: [
				{
					"code": "sex",
					"name": "女",
					"id": "0",
				},
				{
					"code": "sex",
					"name": "男",
					"id": "1",
				}
			]
		}
	},
	components:{
		SelectOption
	},
	methods: {
		changeOption(code, value){
			console.log(code, value)
		}
	}
}
</script>
<style scoped lang="scss">

.insure-select{
	border-radius: 3px;
	background: white;
	margin-top: .12rem;
	padding: .12rem .2rem;
	.title{
		font-size: .34rem;
		color: #666666;
		height: .92rem;
		line-height: .92rem;
	}
}
</style>