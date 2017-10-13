import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

var routes = [
	{
	    path: '/',
	    component: () => import('@/common/Hello'),
	    meta:{headerTitle: "首页"}
	},
	{
	    path: '/tag',
	    component: () => import('../views/demo/tag'),
	    meta:{headerTitle: "标签页"}
	},
	{
	    path: '/content',
	    component: () => import('../views/demo/content'),
	    meta: {headerTitle: "内容页",isShowHeader:true}
	},
	{
	    path: '/data',
	    component: () => import('../views/demo/data'),
	    meta: {headerTitle: "数据页"}
	},
	// 以下是详情页路由，上面是测试路由
	{
	    path: '/h5/detail/unit',
	    component: () => import('../views/details/index'),
	    meta: {headerTitle: "详情页"}
	},
	// 直播页面
	{
	    path: '/h5/live/live',
	    component: () => import('../views/live/live'),
	    meta: {headerTitle: "直播"}
	},
	// 直播页面
	{
	    path: '/h5/live/teacherDetails',
	    component: () => import('../views/live/teacherDetails'),
	    meta: {headerTitle: "讲师信息"}
	},
	// 产品库
	{
	    path: '/h5/product',
	    component: () => import('../views/productHouse/index'),
	    meta: {headerTitle: "产品库",isShowHeader:true}
	},
	//考试星
	{
		path: '/drm',
		component: () => import('../views/drm/drm'),
		meta: {headerTitle: "认证考试"}
	},
	//定期寿
	{
		path: '/h5/termInsure/termInsure',
		component: () => import('../views/termInsure/index'),
		meta: {headerTitle: "产品详情"}
	},
]

const router = new Router({
	mode: 'history',
  	routes
})

export default router