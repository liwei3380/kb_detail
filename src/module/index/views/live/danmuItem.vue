<template>
	<div class="comment-item">
		<img class="avatar" :src="comment.user.pic">
		<span class="name">{{comment.user.nick}}</span>
		<span class="time">{{commentTime}}</span>
		<span class="content" v-html="commentContent" ></span>
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
	}
}
</script>
<style lang="scss" scoped>
.comment-item{
	padding:3px 0;
	.avatar{
		height: .58rem;
		width: .58rem;
		border-radius: 50%;
		vertical-align: middle;
		border: 1px solid #e6454a;
	}
	.name{
		font-size: .28rem;
		color: blue;
	}
	.content,.time{
		font-size: .26rem;
	}
	.time{
		color: #848484;
	}
	span{
		color: #333333;
		vertical-align: middle;
	}
}
</style>
<style>
	.emotionimg{
		width:18px;
	}
</style>