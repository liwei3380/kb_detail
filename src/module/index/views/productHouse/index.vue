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
		<div class="p-type-block" v-if="pScreenSelectData">
			<ul>
				<li :class='queryData.code.length>0?"f-border-radius-gray":"f-border-radius-red"' @click="setScreenQuery('all')">全部</li>
				<li v-for="(val,key) in pScreenSelectData" :class='val.selected?"f-border-radius-red":"f-border-radius-gray"' @click="setScreenQuery(val)" v-show="val.show == 1">{{val.name}}</li>
			</ul>
		</div>
		<div class="p-choose-block">
			<p class="f-border-radius-gray" @click="showOrder">推荐排序</p>
			<p class="f-border-radius-gray" @click="showRightMenu">筛选</p>
		</div>

		<productList />
		<productOrder :sliders="sliders" @getSortFromSon="getSort"/>
		<productRightSelect :rightSliders="rightSliders" :pSelsectData="pSelsectData"/>

	</div>
</template>
<script>
import productList from './productList'
import productOrder from './productOrder'
import productRightSelect from './productRightSelect'
import api from '@/api'
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
		    },
		    pSelsectData:"",
		    pScreenSelectData:"",
		    queryData:{
		    	keyword:"",
			    sort:"1",
			    code:[],
			    area:"",
			    province:"",
			    brand:"",
			    crowd:"",
			    identity:"",
			    other:"",
			    pageStartIndex:0
		    }
		    
		}
	},
	created(){
		let _this = this;
		// this.$loading(true);
		_this.pScreenSelectList();
		_this.pSelectList();
	},
	components:{productList, productOrder, productRightSelect},
	methods:{
		showOrder(){
			this.sliders.show = true
		},
		showRightMenu(){
			this.rightSliders.show = true
		},
		pSelectList(){
			let _this = this;
			api.getProductSelect(function(isSuccess,data,err){
		        if (isSuccess) {
		        	_this.pSelsectData = data.body;	
		        }
	        })
		},
		// 获取屏幕筛选条件列表，动态添加选中状态为false，通过点击事件改变其标签上面的选中状态；
		pScreenSelectList(){
			let _this = this;
			api.getProductScreenSelect(function(isSuccess,data,err){
				if (isSuccess) {
					let codes = data.body;
					for(var i in codes){
						codes[i].selected = false;
					}
		        	_this.pScreenSelectData = codes;
		        }
			})
		},
		setScreenQuery(item){
			let _this = this;
			// 如果全选,所有的selected都为false，同时query数据中code为空；
			if (item == "all") {
				_this.queryData.code.length = 0;
				for(var i in _this.pScreenSelectData){
					_this.pScreenSelectData[i].selected = false;
				}
			}else{
				if (item.selected == false) {
					item.selected = true;
					_this.queryData.code.push(item.code);
					console.log("添加",_this.queryData.code)
				}else{
					item.selected = false;
					var index = _this.queryData.code.indexOf(item.code);
					if (index > -1) {
						_this.queryData.code.splice(index, 1);
					}
					console.log("删除",_this.queryData.code)
				}
			}
			
			// 查询列表接口
			_this.getProductList()
		},
		getProductList(){
			console.log("产品库列表接口")
		},
		//获取排序列表
		getSort(data){
			this.queryData.sort = data;
			this.getProductList()
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
		padding: 0 .15rem;
		height: .9rem;
		background: #ffffff;
		display: inline-block;
		line-height: .9rem;
		text-align: center;
		margin-right: 0.1rem;
	}
	li:first-child{margin-right:.01rem;}
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
