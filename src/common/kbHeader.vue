<template lang="html">
	<header class="header-block ">
		<div>
			<i class="kb-back"></i>
		</div>
		<div>
			<span class="kb-title">{{title}}</span>
		</div>
		<div>
			<i class="kb-menu" @click="showMenu"></i>
		</div>
		<menuBlock :sliders="sliders" />
	</header>
	
</template>

<script>
import menuBlock from './menuBlock'
export default{
	props:['title'],
	data(){
		return{
			sliders: {
		        show:false,
		        isNeedMask:true
		    }
		}
	},
	methods:{
		showMenu(){
			this.sliders.show = true
		}
	},
	components:{menuBlock}
}
</script>

<style  lang="scss" scoped>

.header-block{
	text-align: center;
	display: flex;
	border-bottom:1px solid #c6c6c6;
	background: #ffffff;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 99;
	div{
		flex:1;
		line-height:.48rem;
		margin: .2rem 0;
	}
	div.slider-block{margin:0}
	.kb-back{
		width: .48rem;
	    height: .48rem;
		background: url('../assets/images/common/back.png');
		background-size: cover;
	    float: left;
	    margin-left: .3rem;
	}
	.kb-menu{
		margin-top: .06rem;
		width: .36rem;
	    height: .36rem;
		background: url('../assets/images/common/menu.png');
		background-size: cover;
		float: right;
		margin-right: .3rem;
	}
	.kb-title{
	    font-size: .34rem;
    	font-weight: bold;
	}
}
</style>