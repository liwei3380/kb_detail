<template>
	<div class="gift-content">
		<div class="close" @click="close">关闭</div>
		<div class="title">
			打赏
		</div>
		<div class="gift-wrap">
			<div v-for="(item, index) in gifts" class="gift-block" @click="selectGift(index)">
				<span :class="item.className">{{item.text}}</span>
			</div>
		</div>
		<div class="gift-btn" @click="sendGift">确认打赏</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			selected: -1,
			gifts: [{text:1,className:''},{text:2,className:''},{text:3,className:''},{text:4,className:''},{text:5,className:''},{text:6,className:''}]
		}
	},
	created(){
		for (var i = 0; i < this.gifts.length; i++) {
			this.gifts[i].className = ''
		}
		this.selected = -1
	},
	methods:{
		selectGift(index){
			for (var i = 0; i < this.gifts.length; i++) {
				this.gifts[i].className = ''
			}
			this.gifts[index].className = 'active'
			this.selected = index
		},
		close(){
			this.$emit('close')
		},
		sendGift(){
			if(this.selected == -1){
				alert('请先选择礼物')
				return
			}
			this.$emit('send',this.selected)
		}
	}
}
</script>
<style lang="scss" scoped>
.gift-content{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding-bottom: 50px;
	background: url(http://livestatic.videocc.net/assets/wimages/reward-bg.png);
	background-size: cover;
	.title{
		padding: 10px 0;
		color: #fff9c4;
		text-align: center;
		font-weight: 900;
		font-size:14px;
	}
	.gift-wrap{
		display: flex;
		padding: 0 5%;
		flex-wrap: wrap;
		.gift-block{
			color: #fff9c4;
			flex: 1 0 30%;
			text-align: center;
			padding: 12px 0;
			span{
				display: inline-block;
				padding: 2px 5px;
			}
			.active{
				background-color: #a62732;
			}
		}
	}
	.gift-btn{
		width: 75%;
		padding: 12px 0;
		border-radius: 5px;
		text-align: center;
		margin: auto;
		background-color: #fff9c4;
		font-size: 20px;
		color: red;
		margin-top: 12px;
	}
	.close{
		position: absolute;
		left: 10%;
		top: 10px;
		color: #fff9c4;
	}
}
</style>