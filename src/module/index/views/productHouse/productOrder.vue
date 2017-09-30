<template lang="html">
  <kbSlider :slider="sliders" animationDirect="bottomToTop" :isModalToClose="true">
    <div class="menu-block" @click.stop>
    	<div>
    	   <p class="f-border-bottom-line-gray">推荐排序</p>
	       <p class="f-border-bottom-line-gray">价格最低</p>
	       <p class="f-border-bottom-line-gray">销量最高</p>
	       <p class="f-border-bottom-line-gray">最新上线</p>
	       <p>推广费最高</p>
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
	    text-align: center;
	    p{
	    	line-height: 1.04rem;
	    }
	    p:first-child{
	    	color: #f2494e;
	    }
    }
}
</style>