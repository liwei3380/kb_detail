<template lang="html">
	<div class="product-block">
		<div class="p-search-block">
			<p class="f-border-radius-gray p-search">
				<span></span>
				<input type="search" placeholder="请输入产品名称">
			</p>
			<p class="f-border-radius-gray">
				<span></span>
			</p>
		</div>
		<div class="p-type-block">
			<ul>
				<li class="f-border-radius-red">全部</li>
				<li class="f-border-radius-gray">寿险</li>
				<li class="f-border-radius-gray">全部</li>
				<li class="f-border-radius-gray">全部</li>
				<li class="f-border-radius-gray">全部</li>
				<li class="f-border-radius-gray">全部</li>
				<li class="f-border-radius-gray">全部</li>
				<li class="f-border-radius-gray">寿险</li>
				<li class="f-border-radius-gray">寿险</li>
				<li class="f-border-radius-gray">寿险</li>
				<li class="f-border-radius-gray">寿险</li>
			</ul>
		</div>
		<div class="p-choose-block">
			<p class="f-border-radius-gray" @click="showOrder">推荐排序</p>
			<p class="f-border-radius-gray" @click="showRightMenu">筛选</p>
		</div>

		<productList />
		<productOrder :sliders="sliders" />
		<productRightSelect :rightSliders="rightSliders" />

	</div>
</template>
<script>
import productList from './productList'
import productOrder from './productOrder'
import productRightSelect from './productRightSelect'
export default{
	data(){
		return {
			sliders: {
		        show:false,
		        isNeedMask:true
		    },
		    rightSliders: {
		        show:false,
		        isNeedMask:true
		    }
		}
	},
	components:{productList, productOrder, productRightSelect},
	methods:{
		showOrder(){
			this.sliders.show = true
		},
		showRightMenu(){
			this.rightSliders.show = true
		}
	}
}
</script>

<style lang="scss" scoped>
$c-gray: #666666;
$c-red: #f2494e;
$c-yellow: #e39605;
$c-black: #333333;
.f-border-radius-gray{border-radius: 5px}
.f-border-radius-red{border-radius: 5px}


.product-block{
	padding-top: .9rem;
	background: #f5f5f5;
	padding-bottom: .5rem;
	div.p-search-block, div.p-choose-block{
		color: $c-gray;
		margin: .1rem .1rem 0 .1rem;
	}
	div.p-type-block{margin: .1rem 0 0 .1rem;color: $c-gray;}
}

.p-search-block{
	display: flex;
	p{
		padding: .2rem;
		text-align: center;
		background: #ffffff;
	}
	p.p-search{
		position: relative;
		span{
			position: absolute;
			display: inline-block;
			background: url('../../../../assets/images/common/search.png') no-repeat;
			background-size: contain;
		    width: .3rem;
		    height: .4rem;
		    left: .2rem;
		}
	}
	p:first-child{
		margin-right: .1rem;
		flex:9;
		input{
		    width: 100%;
		    height: 100%;
		    display: block;
		    border: none;
		    outline: none;
		    font-size: medium;
		    padding-left: .5rem;
		}
	}
	p:last-child{
		flex: 1;
		padding: .12rem;
		span{
			display: inline-block;
			width: 100%;
			height: 100%;
			background: url('../../../../assets/images/common/auth.png') no-repeat;
		    background-size: contain;
   	 		background-position: center;
		}
		span.active{
			background: url('../../../../assets/images/common/search.png') no-repeat;
		    background-size: contain;
   	 		background-position: center;
		}
	}
}
.p-type-block {
    overflow: auto;
    white-space: nowrap;
	li{
		width: .9rem;
		height: .9rem;
		background: #ffffff;
		display: inline-block;
		line-height: .9rem;
		text-align: center;
	}
	li:last-child{margin-right: 0.1rem;}
}
.p-choose-block{
	display: flex;
	p{
		background: #ffffff;
		flex: 3;
		text-align: center;
	    padding: .2rem;
	}
	p:first-child{
		flex: 7;
		margin-right: .1rem;
	}
	p:first-child:after{
		content: "";
		background: url('../../../../assets/images/common/down-arrow.png') no-repeat;
		background-position: 95% 52%;
	}
}

</style>
