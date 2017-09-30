// 与业务无关，公共需要调用的辅助js文件

// 动态在页面中添加需要的js外链
function pageAddScript(url,isAsync=true) {
  var addScriptUrl = document.createElement('script');
  if(isAsync){
    addScriptUrl.async = 1
  }
  addScriptUrl.setAttribute('src', url);
  document.body.appendChild(addScriptUrl);
  return addScriptUrl
}
/**
 * 日期格式化
 * @param    {Date}     date 日期
 * @param    {String}   fmt  格式
 * @return   {String}
 * @Author   zhanglw
 * @DateTime 2017-09-19
 */
export function dateFormat(date,fmt){
  var o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "h+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;
}

export default{
  pageAddScript
}