<template>
	<div class="live">
		<Player></Player>
		<Teacher></Teacher>
		<LiveIntr :living=true></LiveIntr>
	</div>
</template>
<script>
import Player from './player'
import Teacher from './teacher'
import LiveIntr from './liveIntr'
export default {
	
	components:{
		Player,Teacher,LiveIntr
	}
}
</script>
<style scoped lang="scss">
.live{
	background: #f5f5f5;
}
</style>