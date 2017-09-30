<template>
	<div class="teacher">
		<div class="photo-pos">
			<img class="photo" :src="avatarSrc" @error="setErrorImg" alt="头像">
			<div class="name">{{name}}</div>
		</div>
		
		<div class="more">
			<router-link :to="'teacherDetails'" class="more-btn">了解讲师</router-link>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			name:'讲师张',
			avatarSrc:'https://bug.kbao123.com/sclub/html5/images/shop/avaar.png',
		}
	},
	methods:{
		setErrorImg(){
			this.avatarSrc = require('../../../../assets/images/live/avatar.png')
		}
	}
}
</script>
<style lang="scss" scoped>
	.teacher{
		width: 100%;
		padding: 5px 12px;
		box-sizing: border-box;
		display: flex;
		align-items: baseline;
		background: white;
		div{
			display: inline-block;
			line-height: .35rem;
		}
		.photo-pos{
			width: 50%;
		}
		.photo{
			display: inline-block;
			width: .65rem;
			height: .65rem;
			vertical-align: middle;
			border: 1px solid #e6454a;
			border-radius: 50%;
		}
		.name{
			font-size: .3rem;
			vertical-align: middle;
			margin-left: .1rem;
			color: #333333;
		}
		.more{
			width: 50%;
			text-align: right;
		}
		.more-btn{
			font-size:.26rem;
			border: 1px solid #e6454a;
			border-radius: .25rem;
			color: #e6454a;
			height: .5rem;
			width: 1.8rem;
			line-height: .5rem;
			display: inline-block;
			text-align: center;
			vertical-align: middle;
		}
		a{text-decoration:none;cursor: pointer}
	}
</style>
