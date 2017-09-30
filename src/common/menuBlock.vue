<template lang="html">
  <kbSlider :slider="sliders" animationDirect="bottomToTop" :isModalToClose="true">
    <div class="menu-block" @click.stop>
    	<div>
    	   <p class="f-border-bottom-line-gray">首页</p>
	       <p class="f-border-bottom-line-gray">订单</p>
	       <p class="f-border-bottom-line-gray">个人中心</p>
	       <p>分享全部</p>
    	</div>
       
    </div>
  </kbSlider>
</template>

<script>
import kbSlider from '@/common/kbSlider/index'
export default{
	props:['sliders'],
	data(){
		return{
		}
	},
	components:{kbSlider},
	
}
</script>
<style  lang="scss" scoped>
.menu-block{
	position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: 5px;
    div{
    	background: #fff;
	    margin: .3rem .16rem;
	    border-radius: 5px;
	    padding: 0 .2rem;
	    p{
	    	line-height: 1.04rem;
	    }
    }
}
</style>