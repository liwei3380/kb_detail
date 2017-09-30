<template lang="html">
  <kbSlider :slider="rightSliders" animationDirect="rightToLeft" :isModalToClose="true">
    <div class="select-block" @click.stop>
    	<div class="s-main">
    		<dl>
	    		<dt class="f-border-bottom-line-gray">投保区域</dt>
	    		<dd class="s-location">
	    			<p class="f-border-radius-red"><span>北京</span></p>
	    			<p><span>定位</span></p>
	    		</dd>
	    		<dl class="s-area">
	    			<dt>省会</dt>
	    			<dd>
	    				<p class="f-border-radius-gray ">北京</p>
	    				<p class="f-border-radius-gray ">北京</p>
	    				<p class="f-border-radius-gray ">北京</p>
	    				<p class="f-border-radius-gray ">北京</p>
	    			</dd>
	    		</dl>
	    	</dl>
	    	<dl>
	    		<dt class="f-border-bottom-line-gray">按分类</dt>
	    		<dd>
	    			<p class="f-border-radius-gray ">交通意外</p>
	    			<p class="f-border-radius-gray ">交通意外</p>
	    			<p class="f-border-radius-gray ">交通意外</p>
	    		</dd>
	    	</dl>
	    	<dl>
	    		<dt class="f-border-bottom-line-gray">按品牌</dt>
	    		<dd>
	    			<p class="f-border-radius-gray ">安心</p>
	    			<p class="f-border-radius-gray ">华夏</p>
	    			<p class="f-border-radius-gray ">人寿</p>
	    			<p class="f-border-radius-gray ">华夏</p>
	    			<p class="f-border-radius-gray ">人寿</p>
	    		</dd>
	    	</dl>
	    	<dl>
	    		<dt class="f-border-bottom-line-gray">按品牌1</dt>
	    		<dd>
	    			<p class="f-border-radius-gray ">安心</p>
	    			<p class="f-border-radius-gray ">华夏</p>
	    			<p class="f-border-radius-gray ">人寿</p>
	    			<p class="f-border-radius-gray ">华夏</p>
	    			<p class="f-border-radius-gray ">人寿</p>
	    		</dd>
	    	</dl>
	    	<dl>
	    		<dt class="f-border-bottom-line-gray">按品牌2</dt>
	    		<dd>
	    			<p class="f-border-radius-gray ">安心</p>
	    			<p class="f-border-radius-gray ">华夏</p>
	    			<p class="f-border-radius-gray ">人寿</p>
	    			<p class="f-border-radius-gray ">华夏</p>
	    			<p class="f-border-radius-gray ">人寿</p>
	    		</dd>
	    	</dl>
    	</div>
    	
        <div class="s-btn">
	       	<p>重置</p>
	       	<p>完成</p>
        </div>
    </div>
  </kbSlider>
</template>

<script>
import kbSlider from '@/common/kbSlider/index'
export default{
	props:['rightSliders'],
	data(){
		return{
		}
	},
	components:{kbSlider},
	
}
</script>

<style  lang="scss" scoped>
$p-red: #f2494e;
$p-black: #333333;
$p-gray: #6a6a6a;

.select-block{
    -webkit-overflow-scrolling: touch;
  	overflow-scrolling: touch;
	position: absolute;
	top: 0;
	right: 0 ;
	bottom: 0;
	width: 80%;
	padding-right: .3rem;
	background: #fff;
	transition: all .1s ease;
	user-select: none;
	overflow-y: auto;

	div.s-main{
	    height: 85%;
	    padding-bottom: .5rem;
	    overflow-y: auto;
		dt{
		    line-height: .82rem;
	    	padding-left: .5rem;
		}
		dd{
			line-height: .65rem;
			margin-left: .5rem;
			padding-top: .16rem;
			p{
				display: inline-block;
				width: 30%;
				text-align: center;
			    margin-top: .1rem;
	    		margin-bottom: .06rem;
	    		margin-right: .13rem;
			}
			p:nth-child(3n+0){
				margin-right: 0;
			}
		}

		.s-area{
			dt{
				margin-bottom: -.2rem;
			}
		}
		.s-location{
			display: flex;
			margin-bottom: .06rem;
			p{
				flex: 3;
				text-align: center;
				span:before{
					content: '';
					background: url('../../../../assets/images/common/circle.png') no-repeat;
					display: inline-block;
				    height: .33rem;
				    vertical-align: top;
				    width: .4rem;
				    background-size: contain;
				    margin-right: .2rem;
    				margin-top: .15rem;
				}
			}
			p:first-child{
				flex: 2;
				color: $p-red;
				span:before{
					content: '';
					background: url('../../../../assets/images/common/location.png') no-repeat;
				    background-size: contain;
				    margin-right: 0;
				}
			}
		}
	}

	.s-btn{
	    position: fixed;
	    bottom: 0;
	    line-height: .9rem;
	    width: 80%;
	    padding: .14rem .12rem;
	    margin: 0 auto;
	    text-align: center;
	    color: #ffffff;
		p{
			width: 47%;
		    display: inline-block;
		    border: 1px solid;
		    background: $p-red;
		     border-radius: 5px;
		}
		p:first-child{
			margin-right: .1rem;
			background: #bfbfbf;

		}
	}

}

</style>