tag.vue<template>
  <div class="hello">
    <p>meg:{{msg}}</p>
    <button @click="toGet">点击查看GET事件</button>
    <button @click="toPost">点击查看POST事件</button>
    <router-link to="data">去data页面</router-link>
    <i class="ico1"></i><i class="ico2"></i>
  </div>
</template>

<script>
import api from '@/api'
import {mapGetters,mapState} from 'vuex'
import dtlogin from '@/service/dtLogin.js'
import dtShare from '@/service/dtShare/index.js'
export default {
  name: 'hello',
  data () {
    return {
      msg: '原始测试数据'
    }
  },
  created(){
    // 显示分享按钮
    // dtShare.showAppShareButton(1,1);

    // app分享传参数
    dtShare.transformData("share_tile", "share_desc", window.location.href, "https://f12.baidu.com/it/u=2754208607,630952272&fm=72", " ",false)
    // H5二次分享传参数
    dtShare.h5ShareJs("share_tile", "share_desc", window.location.href, "https://f12.baidu.com/it/u=2754208607,630952272&fm=72")

    // kbShareBtnShow('1','0');
    // 登录+认证判断
    // if (this.isLogin) {    
    //   if (this.isAppOpen) {
    //     dtlogin.goAuthorization();
    //   }
    // }else{
    //   dtlogin.toLogin();
    // }
    
  },
  methods: {
    toGet: function(){
      var _this = this;
      api.getDemo(function(isSuccess,data,err){
        console.log('get==========',isSuccess,data,err)
      })
    },
    toPost: function(){
      let param = {"status":500,"Token":"test123","pageIndex":"0","pageCount":"10"}
      api.getPage(param,function(isSuccess,data,err){
        console.log('post=========',isSuccess,data,err)
      })
    }
  },
  computed:{
    ...mapGetters(['isLogin']),
    ...mapState({
        appOs:'appOs',
        isAppOpen: 'isAppOpen'
      }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
