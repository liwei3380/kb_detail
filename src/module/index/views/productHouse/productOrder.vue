<template lang="html">
  <kbSlider :slider="sliders" animationDirect="bottomToTop" :isModalToClose="true">
    <div class="menu-block" @click.stop>
    	<div>
    	   <p class="f-border-bottom-line-gray active">推荐排序</p>
	       <p v-for="(item,x) in orderList" :class='[item.code == selected ?"active":"","f-border-bottom-line-gray"]' @click="setOrder(item.code)">
	       		{{item.name}}
	       </p>
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
			orderList:[
			{code:'1',name:'价格最低'},
			{code:'2',name:'销量最高'},
			{code:'3',name:'最新上线'},
			{code:'4',name:'推广费最高'},
			],
			selected:""
		}
	},
	components:{kbSlider},
	methods:{
		setOrder(code){
			this.selected = code;
			this.$emit('getSortFromSon', code);
			this.sliders.show = false;
		}
	}
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
	    p.active{
	    	color: #f2494e;
	    }
	    p:last-child{
	    	border: none;
	    }
    }
}
</style>