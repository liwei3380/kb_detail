<template>
	<div class="comment-item">
		<div class="title-img-wrap">
			<img class="avatar" :src="comment.user.pic">
			<div class="title-wrap">
				<span class="name">{{comment.user.nick}}</span>
				<span class="time">{{commentTime}}</span>
			</div>
			<!-- <div class="praise-box">
				<span class="praise-btn" :class={active:isActive} @click="praise">{{praiseCount}}</span>
			</div> -->
			
		</div>
		
		<div class="content" v-html="commentContent" ></div>
	</div>
</template>
<script>
import {dateFormat} from '@/utils/helper.js'
import {emotionslist} from '@/service/live/emotions.js'
export default {
	props: ['comment'],
	data(){
		return{
			commentTime: '',
			commentContent: '',
			isActive: false,
			praiseCount: 365,
		}
	},
	created(){
		this.commentTime = dateFormat(new Date(parseInt(this.comment.time)),'yyyy-MM-dd hh:mm:ss')
		this.commentContent = this.formatEmotions(this.comment.values[0])
	},
	methods:{
		formatEmotions (_html) { //表情转换：表情以'[微笑]'的形式发送和接受，可以根据需要自定义表情形式
	        if (_html) {
	            var _of =- 1;
	            while ((_of = _html.indexOf("["))!=-1) {
	                var _oe = _html.indexOf("]", _of + 1);
	                if (_oe==-1)
	                    break;
	                var begin = _html.substring(0, _of);
	                var end = _html.substring(_oe + 1);
	                var valstr = _html.substring(_of + 1, _oe);
	                if (valstr) {
	                    var urlstr = '';
	                    for (var i = 0; i < emotionslist.length; i++) {
	                    	if(emotionslist[i].title == valstr){
	                    		urlstr = emotionslist[i].url
	                    	}
	                    }
	                    if (urlstr) {
	                      valstr = '<img src="' + urlstr + '" class="emotionimg">';
	                    }else{
	                      break;
	                    }
	                }else{
	                  break;
	                }
	                _html = begin + valstr + end;
	            }
	        }
	        return _html;
	    },
	    praise(){
	    	this.isActive = !this.isActive
	    }
	}
}
</script>
<style lang="scss" scoped>
.comment-item{
	padding:3px 0;
	font-size: .28rem;
	&:first-child{
		padding-top: .2rem;
	}
	&:last-child{
		padding-bottom: 1.08rem;
	}
	.title-img-wrap{
		display: flex;
		.avatar{
			height: .58rem;
			width: .58rem;
			border-radius: 50%;
			vertical-align: middle;
			border: 1px solid #e6454a;
		}
		.title-wrap{
			display: inline-block;
			vertical-align: middle;
			margin-left: .34rem;
			width: 3.8rem;
			.name{
				font-size: .28rem;
				display: inline-block;
				width: 3.8rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.time{
				color: #848484;
			}
			div{
				color: #333333;
				vertical-align: middle;
			}
		}
		.praise-box{
			width: 2rem;
			text-align: right;
			.praise-btn{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				width: 2rem;
				display: inline-block;
				&:before{
						content: '';
						margin-right: .1rem;
						display: inline-block;
						width: .26rem;
						height: .24rem;
						background: url('../../../../assets/images/live/praise_gray_icon.png');
						background-size: cover;
					}
				&.active:before{
						content: '';
						margin-right: .1rem;
						display: inline-block;
						width: .26rem;
						height: .24rem;
						background: url('../../../../assets/images/live/praise_red_icon.png');
						background-size: cover;
					}
			}
		}
	}
	.content{
		margin-left: 1rem;
		border-bottom: 1px solid #bfbfbf;
		padding: .28rem 0 .22rem 0;
	}
}
</style>
<style>
	.emotionimg{
		width:18px;
	}
</style>