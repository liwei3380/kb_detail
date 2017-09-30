<template>
	<div class="emoji-content">
		<div class="emoji-pos">
			<div class="emoji-wrap">
				<img class="emoji-block" v-for="item in emotions" :src=item.url @click="selectEmoji(item)">
			</div>
		</div>
		<img class="emoji-block-del" src="http://livestatic.videocc.net/assets/wimages/facedel.png" @click="delEmoji">
	</div>
</template>
<script>
import {emotionslist} from '@/service/live/emotions.js'
export default {
	data () {
		return {
			emotions: emotionslist,
		}
	},
	methods:{
		selectEmoji(item){
			this.$emit('select',item)
		},
		delEmoji(){
			this.$emit('del')
		}
	}
}
</script>
<style lang="scss" scoped>
.emoji-content{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding-bottom: 50px;
	background-color: white;
	padding-top: 12px;
	height: 20%;
	.emoji-pos{
		overflow: scroll;
		height: 100%;
		.emoji-wrap{
			display: flex;
			margin-right: 35px;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			padding: 0 0 0 12px;
			box-sizing: border-box;
			position: relative;
			.emoji-block{
				width: 25px;
				height: 25px;
				padding: 3px;
			}
		}
	}
	.emoji-block-del{
		width: 25px;
		height: 16px;
		padding: 3px;
		position: absolute;
		top: 15px;
		right: 5px;
	}
}
::-webkit-scrollbar {    
	width: 0px;
}
::-webkit-scrollbar {
	display: none;/*隐藏滚轮*/
}
</style>