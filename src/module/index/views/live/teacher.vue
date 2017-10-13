<template>
	<div class="teacher">
		<div class="photo-pos">
			<img class="photo" :src="avatarSrc" @error="setErrorImg" alt="头像">
			<div class="name">{{lectuerName}}</div>
		</div>
		
		<div class="more" v-show="lectuer.is_official">
			<div  class="more-btn" @click=teacherDetail>了解讲师</div>
		</div>
	</div>
</template>
<script>
import api from '@/api'
export default {
	props:['lectuerId','lectuerHeadPic','lectuerName','userId','liveId'],
	data(){
		return{
			avatarSrc: this.lectuerHeadPic,
			lectuer: {is_official: 0},
		}
	},
	watch:{
		lectuerHeadPic: function(){
			this.avatarSrc = this.lectuerHeadPic
		},
		lectuerId: function(){
			let lectuerId = this.lectuerId
			if (typeof this.lectuerId == 'undefined') {
				return
			}
			let params = {
				id: lectuerId,
				userId: this.userId
			}
			var _this = this
			api.getLiveLecture(params, function(isSuccess,data,err){
				if (isSuccess) {
					// 请求成功
					if (data.status==200) {
						// 返回数据成功
						_this.lectuer = data.body
					} else {
						// 返回数据失败
						alert(data.message)
					}
				} else {
					// 请求失败
					console.log(err)
					alert('请求失败')
				}
			})
		}
	},
	methods:{
		setErrorImg(){
			this.avatarSrc = require('../../../../assets/images/live/avatar.png')
		},
		teacherDetail(){
			this.$emit('toDetail')
			this.$router.push('teacherDetails?lectuerId='+this.lectuerId+'&liveId='+this.liveId)
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
