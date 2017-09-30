<template>
	<div class="teacher-details">
		<div class="teacher-intro">
			<img :src=teacherSrc @error="setErrorImg" alt="头像">
		</div>
		<div class="title title-first">讲师课程列表</div>
		<div class="lesson-intro">
			<div class="lesson-block" v-for="item in lessons">
				
				<div class="content" @click="toLive(item)">
					<div class="text-wrap">
						<div class="title"></div>
						<span class="status" v-if="item.status">
							<div class="btn">直播中</div>
						</span>
						<span class="status" v-if="!item.status">
							<div class="btn">回放</div>
						</span>
					</div>
					<div class="live-title">{{item.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			teacherSrc:'https://bug.kbao123.com/sclub/html5/images/shop/avaar.png',
			lessons:[],
		}
	},
	methods: {
		setErrorImg(){
			this.teacherSrc = require('../../../../assets/images/live/avatar.png')
		},
		toLive(item){
			if (item.status) {
				this.$router.push('live')
			} else {
				return
			}
		}
	},
	created(){
		//获取课程列表
		for (var i = 0; i < 5; i++) {
			this.lessons[i] = {name:'KPI的初步认识与讲解---李明老师',intro:'课程介绍',status:false}
		}
		this.lessons[0].status = true
	}
}
</script>
<style lang="scss" scoped>
.teacher-details{
	background: #f5f5f5;
	.teacher-intro{
		background: url('../../../../assets/images/live/teacher_bg.png');
		background-size: cover;
		height: 2.64rem;
		text-align: center;
		line-height: 3.3rem;
		img{
			display: inline-block;
			height: .98rem;
		}
	}
	.title{
		font-size: 18px;
	}
	.title-first{
		margin-top: .16rem;
		background: white;
		padding-left: .3rem;
		border-left: 5px solid #e6454a;
	}
	.lesson-intro{
		background: white;
		padding: .05rem .12rem .12rem .12rem;
		.title{
			font-size: 18px;
		}
		.lesson-block{
			padding: 5px;
			.content{
				font-size:12px;
				width: 100%;
				height: 3.2rem;
				border-radius: 5px;
				background: #dedede;
				position: relative;
				.text-wrap{
					padding-top: .2rem;
					display: flex;
					align-items: center;
					font-size: 12px;
					.title{
						width: 80%;
					}
					.status{
						width: 20%;
						min-width: 1.2rem;
						.btn{
							width: 1.2rem;
							height: .35rem;
							background: white;
							border: 1px solid #e6454a;
							border-radius: .18rem;
							text-align: center;
						}
					}
				}
				.live-title{
					position: absolute;
					bottom:.16rem;
					left: .34rem;
				}
			}
		}
	}
}
</style>