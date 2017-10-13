<template>
	<div class="live">
		<Player :userId=userId :startTime=liveInfo.startTime :limitType=liveInfo.limitType @toRTime=toRTime></Player>
		<Teacher :lectuerId=liveInfo.lectuerId :lectuerHeadPic=liveInfo.lectuerHeadPic :lectuerName=liveInfo.lectuerName :userId=userId :liveId=liveId @toDetail=teacherDetail></Teacher>
		<LiveIntr 
			:living=living 
			:userId=userId 
			:subscribe=liveInfo.subscribe 
			:subscribeCount=liveInfo.subscribeCount
			:theme=liveInfo.theme
			:canComment=liveInfo.canComment
			:startTime=liveInfo.startTime
			:description=liveInfo.description
			:isAppOpen=isAppOpen
			:liveId=liveId
			:lectuerId=liveInfo.lectuerId
			:limitType=liveInfo.limitType
			:toTeacher=toTeacher
			@toSubscribe=liveSubscribe
			></LiveIntr>
	</div>
</template>
<script>
import Player from './player'
import Teacher from './teacher'
import LiveIntr from './liveIntr'
import dtShare from '@/service/dtShare/index.js'
import dtlogin from '@/service/dtLogin.js'
import {mapGetters,mapState} from 'vuex'
import api from '@/api'
import urlHelper from '@/utils/urlHelper.js'

export default {
	data(){
		return{
			liveInfo: {lectuerHeadPic:''},
			liveId: '',
			living: false,
			toTeacher: 0,
		}
	},
	components:{
		Player,Teacher,LiveIntr
	},
	computed:{
	    ...mapGetters(['isLogin']),
	    ...mapState({
	        appOs:'appOs',
	        isAppOpen: 'isAppOpen',
	        userId: 'userId'
	      }),
	  },
	created(){
		// 登录+认证判断
	    if (this.isLogin) {    
	      if (this.isAppOpen) {
	        dtlogin.goAuthorization();
	      }
	    }else{
	      dtlogin.toLogin();
	      return
	    }

		this.liveId = urlHelper.queryString('liveId')
		let params = {id: this.liveId, userId: this.userId}
		var _this = this
		api.getLiveInfo(params, function(isSuccess,data,err){
			if (isSuccess) {
				// 请求成功
				if (data.status==200) {
					// 返回数据成功
					_this.liveInfo = data.body
					if (_this.isAppOpen) {
						if(_this.liveInfo.limitType == 1){
							// 显示分享按钮
							dtShare.showAppShareButton(1,0);
							// app分享传参数
							dtShare.transformData("share_tile", "share_desc", window.location.href, "https://f12.baidu.com/it/u=2754208607,630952272&fm=72", " ",false)
						}
					} else {
						// H5二次分享传参数
						dtShare.h5ShareJs("share_tile", "share_desc", window.location.href, "https://f12.baidu.com/it/u=2754208607,630952272&fm=72")
					}
				} else {
					// 返回数据失败
					alert(data.message)
				}
			} else {
				// 请求失败
				alert("请求失败")
			}
		})
  },
  methods:{
  	liveSubscribe(){
		let params = {liveId: this.liveId, userId: this.userId}
		var _this = this
  		api.liveSubscribe(params, function(isSuccess,data,err){
  			if (isSuccess) {
  				// 请求成功
  				if (data.status==200) {
  					// 返回数据成功
  					_this.liveInfo.subscribe = 1
  					_this.liveInfo.subscribeCount = parseInt(_this.liveInfo.subscribeCount) + 1
  				} else {
  					// 返回数据失败
  					alert(data.message)
  				}
  			} else {
  				// 请求失败
  				alert('请求失败')
  				console.log(err)
  			}
  		})
  	},
  	toRTime(){
  		this.living = true
  	},
  	teacherDetail(){
  		this.toTeacher += 1
  	},
  }
}
</script>
<style scoped lang="scss">
.live{
	background: #f5f5f5;
}
</style>