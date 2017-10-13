<template>
	<div class="select-option" :class="{select:insuerOption.type==2 || insuerOption.type==1}">
		<label class="select-label">{{insuerOption.name}}</label>
		<div class="option-item" v-if="insuerOption.type==1" @click="selectDate">{{dateTimePickerValue}}</div>
		<div class="option-item" v-if="insuerOption.type==2" @click="selectPicker">选择</div>
		<div class="option-item" v-if="insuerOption.type==3"></div>
		
		<DatetimePicker
			v-if="insuerOption.type==1"
			ref="dtpicker"
			type="date"
			v-model="curDate"
			:startDate="startDate"
			:endDate="endDate"
			@confirm="handleConfirm"
		></DatetimePicker>
		<kbSlider :slider="sliders" animationDirect="bottomToTop" :isModalToClose="true" v-if="insuerOption.type==2">
			<Picker :slots="slots" ref="picker" @click.stop class="my-picker" @change="onValuesChange"></Picker>
		</kbSlider>
	</div>
</template>
<script>
import { DatetimePicker, Picker } from 'mint-ui'
import 'mint-ui/lib/picker/style.css';
import {dateFormat} from '@/utils/helper'
import kbSlider from '@/common/kbSlider/index'
export default {
	props:['insuerOption', 'options'],
	data(){
		return {
			dateTimePickerValue: '选择日期',
			startDate: new Date(1990,0,1),
			endDate: new Date(),
			curDate: new Date(),
			pickerVisible: false,
			sliders: {
				show:false,
				isNeedMask:true
			},
			slots: [],
		}
	},
	components: {
		DatetimePicker,Picker,kbSlider
	},
	created(){
		this.fomatData(this.options)
	},
	methods: {
		selectDate(){
			this.$refs.dtpicker.open()
		},
		handleConfirm(data){
			this.dateTimePickerValue = dateFormat(data,'yyyy-MM-dd')
			this.$emit('changeOption', this.insuerOption.code, this.dateTimePickerValue)
		},
		onValuesChange(picker, values){
			this.$emit('changeOption', this.insuerOption.code, values,)
		},
		selectPicker(){
			this.sliders.show = true
		},
		fomatData(data){
			for (var i = 0; i < data.length; i++) {
				var obj = data[i]
				if(typeof obj.child != 'undefined'){
					this.fomatData(obj.child)
				} else {
					console.log(obj.name)
				}
			}
		}
	}
}
</script>
<style scoped lang="scss">
@mixin after-arrow($rotate:0deg){
	width: .25rem;
	height: .25rem;
	background: url('../../../../assets/images/common/right-arrow.png');
	background-size: contain;
	display: inline-block;
	content: "";
	float:right;
	margin-top: .28rem;
	transform: rotate($rotate);
}
.select-option{
	color: #bcbcbc;
	padding: 0 .22rem;
	border-top: 1px solid #dddddd;
	height: .82rem;
	line-height: .82rem;
	&.select{
		&:after{
			@include after-arrow(90deg);
		}
	}
	.select-label{
		width: 1.6rem;
		display: inline-block;
	}
	.option-item{
		width: 4.4rem;
		display: inline-block;
	}
	.my-picker{
		background: white;
		position: absolute;
		bottom: 0;
		width: 100%;
	}
/* 	select {  
		border: solid 1px #fff;
		appearance:none;
		-moz-appearance:none;
		-webkit-appearance:none;
		font-size: .3rem;
		text-overflow: ellipsis;
		white-space: normal;
	} */
}
</style>