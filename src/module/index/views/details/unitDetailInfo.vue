<template>
	<div class="header">
		<div class="about-service" v-show="iconShow">
			<ul>
				<li><span>服务人员：</span>
					<span name="serverName"></span>
				</li>
				<li><span>联系电话：</span>
					<span name="serverTel"></span>
				</li>
			</ul>
			
		</div>
		
		<div class="unit-info">
			<div class="unit-name" name="unitName">
				<p>安心学平险</p>
				<p>已售出：<span>16136</span></p>
			</div>
			<div class="unit-img" name="unitImg">
				<div class="img-wrap">
					<div class="comp">
						<img src="../../../../assets/images/product/comp.png"/>
					</div>
					
					<div class="collect-div">
						<img src="../../../../assets/images/product/collect.png" ref="collect" @click="collect" v-show="isCollect"/>
						<img src="../../../../assets/images/product/collected.png" ref="collect" @click="collect" v-show="!isCollect"/>
						<img src="../../../../assets/images/product/add.png" ref="add" @click="add" v-show="isAdd"/>
						<img src="../../../../assets/images/product/added.png" ref="add" @click="add" v-show="!isAdd"/>
						
					</div>
				</div>
				
			</div>
			
		</div>
		<div class="border-div"></div>
		<div class="criterion">
			<ul v-model="message">
				<!--<li v-for="item in message"><span><img src=""></span></li>-->
				<li ><span><img src="../../../../assets/images/product/age.png">年龄：</span>{{message[0].age}}</li>
				<li ><span><img src="../../../../assets/images/product/zhiye.png">城堡职业：</span>{{message[1].occupation}}</li>
				<li><span><img src="../../../../assets/images/product/time.png">保障期限：</span>{{message[2].dead_line}}</li>
				<li><span><img src="../../../../assets/images/product/count.png">限购份数：</span>{{message[3].limit}}</li>
			</ul>
		</div>
		<!--<div class="border-div"></div>-->
		<div class="ifcheck" v-show="">
			<ul>
				<li v-show="iconShow"><img src="../../../../assets/images/product/ico_gray_checked.png"> 线上好赔</li>
				<li v-show="iconShow"><img src="../../../../assets/images/product/ico_gray_checked.png"> 服务津贴</li>
			</ul>
		</div>
		<!--<div class="border-div" v-show="iconShow"></div>-->
		<div class="unit-desc">
			<p>一元，保钱包</p>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				iconShow: false,
				imgs: [{
					age: require('../../../../assets/images/product/age.png')
					
				},{ 
					zhiye: require('../../../../assets/images/product/zhiye.png')
				}, {
					count: require('../../../../assets/images/product/count.png')
				},{
					time: require('../../../../assets/images/product/time.png')
				}],
				message: [{
					age: "18周岁-80周岁",
					occupation: "不限",
					dead_line: "1月-1年",
					limit: "1份",
					type: 'age'
				},{
					age: "22周岁-60周岁",
					occupation: "不限",
					dead_line: "2月-5年",
					limit: "1份",
					type: 'time'
				},{
					age: "18周岁-90周岁",
					occupation: "不限",
					dead_line: "1月-10年",
					limit: "1份",
					type: 'zhiye'
				},{
					age: "18周岁-90周岁",
					occupation: "IT",
					dead_line: "1月-30年",
					limit: "3份",
					type: 'zhiye'
				}],
//				iconImg: {
//					collect
//				}
				isCollect: true,
				isAdd: true
			}
		},
		methods: {
			// 点击收藏时发送一个请求，请求成功后改变按钮状态，post对应产品的id和状态
			collect() {
				this.isCollect = !this.isCollect;
			},
			// 点击添加时同上
			add() {
				this.isAdd = !this.isAdd;
			}
			
		},
		mounted() {
//			this.ifInApp();
		}
		
		
	}
</script>

<style lang="scss" scoped="scoped">
	ul li {
		list-style: none;
	}
	.header {
		background: #FFFFFF;
	}
	.about-service {
		
		/*padding-left: 10px;*/
	}
	.about-service ul {
		width: 96%;
		margin: 0 auto;
		border-bottom: 1px solid #d9d9d9;
		padding: 5px 0;
	}
	.about-service ul li {
		line-height: 30px;
	}
	.about-service ul li:first-child {
		background: url("../../../../assets/images/product/person.png") no-repeat left;
		padding-left: 3rem;
		background-size: 20px;
	}
	.about-service ul li:last-child {
		background: url("../../../../assets/images/product/phone.png") no-repeat left;
		padding-left: 2.9rem;
		background-size: 20px;
	}
	.unit-info {
		display: flex;
		/*border-bottom: 1px solid #d9d9d9;*/
		width: 96%;
		margin: 0 auto;
	}
	
	.border-div {
		width: 96%;
		height: 1px;
		background: #D9D9D9;
		margin: 0 auto;
	}
	.unit-info:after {
		content: "";
		display: block;
		clear: both;
		visibility: hidden;
	}
	.unit-name,.unit-img {
		flex: 1;
	}
	.unit-name {
		/*padding-left: 1.0rem;*/
	}
	.unit-name p {
		line-height: 36px;
		color: #333333;
		font-size: 12px;
	}
	.unit-name p:last-child {
		color: #a2a2a2;
		font-size: 12px;
	}
	.unit-name span {
		font-weight: bold;
	}
	
	.unit-img {
		/*text-align: center;*/
		line-height: 43px;
		position: relative;
	}
	.img-wrap {
		text-align: center;
	    line-height: 43px;
	    position: absolute;
	    right: -6px;
	    top: 0;
	    /*width: 12rem;*/
	}
	.comp {
		/*position: absolute;*/
		left: 2rem;
	}
	.comp img{
		width: 8rem;
		/*padding-right: 0.8rem;*/
	}
	.collect-div {
		/*position: absolute;*/
		height: 2.5rem;
		/*right: 1.1rem;*/
		margin-top: -5px;
		width: 10rem;
	}
	.collect-div img{
		width: 5rem;
	}
	.collect-div img:nth-child(1),.collect-div img:nth-child(2) {
		margin-right: -1.6rem;
	}
	.criterion {
		
	}
	.criterion ul ,.ifcheck ul {
		width: 96%;
		margin: 0 auto;
		overflow: auto;
		border-bottom: 1px solid #D9D9D9;
		padding: 5px 0;
	}
	.criterion ul li,.ifcheck ul li {
		width: 50%;
		float: left;
		line-height: 30px;
		font-size: 12px;
		color: #666666;
	}
	.criterion ul li img {
		vertical-align: middle;
		width: 1.5rem;
		margin-right: 5%;
		/*margin-left: 3%;*/
		/*padding-left: 1rem;*/
	}
	.ifcheck ul li img {
		width: 1.2rem;
		margin-right: 1rem;
		padding-left: 2px;
		vertical-align: middle;
	}
	.unit-desc {
		line-height: 40px;
		font-size: 12px;
		color: red;
		padding-left: 1.4rem;
	}
</style>
