<template>
	<div class="comment">
		<div class="title">
			{{title}}
		</div>
		<div class="content">
			<CommentItem v-for="item in comments" :comment=item :key=item.id></CommentItem>
		</div>
	</div>
</template>
<script>
import CommentItem from './commentItem'
export default {
	data(){
		return {
			title: '评论',
			comments: [{nic:'nictest',content:'hhh',id:1},{nic:'nictest',content:'hhh',id:2}],
		}
	},
	components:{
		CommentItem,
	}
}
</script>
<style lang='scss' scoped>
.comment{
	background-color: white;
	padding: 0 .46rem;
	.title{
		font-size: 18px;
		font-weight: 900;
		text-align: center;
	}
}
</style>