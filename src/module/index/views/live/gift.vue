<template>
	<kbSlider :slider="sliders" animationDirect="bottomToTop" :isModalToClose="true">
		<div class="gift-content" @click.stop>
			
				<div class="title">
					现金打赏
				</div>
				<div class="gift-wrap">
					<div v-for="(item, index) in gifts" class="gift-block" @click="selectGift(index)">
						<span :class="item.className">
							<img :src=item.text>
						</span>
					</div>
					<div class="note">
						<input type="text" placeholder="打赏留言" v-model="message">
					</div>
				</div>
				<div class="btn-group">
					<div class="close" @click="close">取消</div>
					<div class="gift-btn" @click="sendGift">确定</div>
				</div>
			
		</div>
	</kbSlider>
</template>
<script>
import kbSlider from '@/common/kbSlider/index'
export default {
	props:['sliders'],
	data(){
		return {
			selected: -1,
			message:'',
			gifts: [{text:require('../../../../assets/images/live/1.png'),className:''},
			{text:require('../../../../assets/images/live/5.png'),className:''},
			{text:require('../../../../assets/images/live/10.png'),className:''},
			{text:require('../../../../assets/images/live/20.png'),className:''},
			{text:require('../../../../assets/images/live/50.png'),className:''},
			{text:require('../../../../assets/images/live/100.png'),className:''}],
			giftsValue:[1,5,10,20,50,100]
		}
	},
	components:{kbSlider},
	created(){
		this.initGift()
	},
	methods:{
		selectGift(index){
			for (var i = 0; i < this.gifts.length; i++) {
				this.gifts[i].className = ''
			}
			this.gifts[index].className = 'active'
			this.selected = index
		},
		initGift(){
			for (var i = 0; i < this.gifts.length; i++) {
				this.gifts[i].className = ''
			}
			this.selected = -1
		},
		close(){
			this.initGift()
			this.$emit('close')
		},
		sendGift(){
			if(this.selected == -1){
				alert('请先选择礼物')
				return
			}
			var selected = this.selected
			var msg = this.message
			this.initGift()
			this.$emit('send',this.giftsValue[selected],msg)
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
	background-size: cover;
	margin: 0 .16rem;
	.title{
		padding-top: .34rem;
		color: #f2494e;
		text-align: center;
		font-size:.34rem;
		background-color: #ffffff;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.gift-wrap{
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		display: flex;
		padding: 0 5%;
		flex-wrap: wrap;
		background-color: #ffffff;
		.gift-block{
			color: #fff9c4;
			flex: 1 0 30%;
			text-align: center;
			padding: .32rem 0;
			span{
				display: inline-block;
				padding: 2px 5px;
				img{
					width: 1.34rem;
					height: .85rem;
				}
			}
			.active{
				background-color: #cb1727;
			}
		}
		.note{
			width:100%;
			padding-bottom: .34rem;
			input{
				width: 100%;
				border-radius: 5px;
				border: 1px solid #bfbfbf;
				box-sizing: border-box;
				height: .84rem;
				line-height: .84rem;
				padding: .28rem .3rem;
			}
		}
	}
	.btn-group{
		display: flex;
		margin: .34rem 0 .28rem 0;
		div{
			width: 50%;
			text-align: center;
			height: .9rem;
			line-height: .9rem;
			border-radius: 5px;
		}
		.close{
			color: #ff3556;
			margin-right: .1rem;
			background-color: #ffffff;
		}
		.gift-btn{
			color: #ffffff;
			margin-left: .1rem;
			background-color: #ff3556;
		}
	}
}
</style>