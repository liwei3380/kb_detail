<template>
	<div class="wrap">
		<!--<div class="contentWrap">-->
			<div class="content">
				<div class="topImg">
					<img src="../../../../assets/images/DRM/DRM_With_Word.png"/>
					<div class="topDesc">
					<ul>
						<li v-for="item in list">{{item.desc}}</li>
					</ul>
				</div>
				</div>
				
				<div class="middle">
					<div class="review" @click="goReview">
						<img src="../../../../assets/images/DRM/review_width_word.png"/>
					</div>
					<div class="mockExam" @click="goMockTest">
						<img src="../../../../assets/images/DRM/mock_exam_word.png"/>
					</div>
				</div>
				<div class="footer" @click="identification">
					<img src="../../../../assets/images/DRM/button.png"/>
				</div>
			</div>
		<!--</div>-->
	</div>
</template>

<script>
import urlHelper from '@/utils/urlHelper.js'
import {mapGetters,mapState} from 'vuex'
var token = urlHelper.queryString('token');
export default {
  name: 'hello',
  data () {
    return {
      list: [{
      	desc: "我是考试说明,1"
      },{
      	desc: "我是考试说明,2"
      },{
      	desc: "我是考试说明,3"
      }]
    }
  },
  methods: {
  	goReview: function () {
  		window.location.href = `${this.host.OP_TM}/exam/index?token=${token}&type=1`;
//		this.$router.push({path: 'www.baidu.com',params: {token:token,type:'1'}})
  	},
  	goMockTest: function () {
  		window.location.href = `${this.host.OP_TM}/exam/index?token=${token}&type=2`;
  	},
  	identification: function () {
  		window.location.href = `${this.host.OP_TM}/exam/index?token=${token}&type=3`;
  	}
  },
  computed:{
    ...mapState({
        host:'host'
      }),
  },
}
	
</script>

<style scoped>
	ul li {
		list-style: none;
	}
	.wrap {
		background: url(../../../../assets/images/DRM/bg.png) no-repeat;
		width: 100%;
		height: 100%;
		background-size: cover;
		position: fixed;
	}
	.contentWrap {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.content {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.topImg {
		/*background: url(../../../../../static/images/DRM/DRM认证考试有文字.png) no-repeat;*/
		width: 96%;
		position: absolute;
		top: 22px;
		left: 2%;
	}
	.topImg img {
		width: 100%;
	}
	.topDesc {
		position: absolute;
		font-size: 28px;
		color: #333;
		width: 100%;
		top:20%;
	}
	.topDesc ul {
		text-align: center;
	}
	.middle {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 56%;
	}
	.review,.mockExam {
		/*float: left;*/
		width: 35%;
		
	}
	.review {
		position: absolute;
		left: 6%;
	}
	.review img,.mockExam img{
		width: 100%;
	}
	.mockExam {
		/*float: left;*/
		position: absolute;
		left: 60%;
	}
	.footer {
		position: absolute;
		bottom: 5%;
		width: 80%;
		left: 10%;
	}
	.footer img {
		height: 40px;
		width: 100%;
		left: 10%;
	}
	.footer p {
		color: #fff;
		font-size: 18px;
		font-weight: 500;
		position: absolute;
		left: 114px;
		top: -2px;
		height: 40px;
		line-height: 40px;
	}
</style>