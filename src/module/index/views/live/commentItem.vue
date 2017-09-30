<template>
	<div class="comment-item">
		<div class="nick">{{comment.nic}}</div>
		<div class="content">{{comment.content}}</div>
		<div class="avatar"></div>
	</div>
</template>
<script>
export default {
	props: ['comment']
}
</script>
<style lang="scss" scoped>
.comment-item{
	div{
		font-size: 12px;
	}
}
</style>