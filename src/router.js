import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/account/Login.vue'
import ForgetPassword from './pages/account/ForgetPassword.vue'
import Register from './pages/account/Register.vue'
import GiftList from './pages/scoreMall/GiftList.vue'
import GiftDetail from './pages/scoreMall/GiftDetail.vue'
import ExchangeRecord from './pages/scoreMall/ExchangeRecord'
import MyScore from './pages/scoreMall/MyScore'
import Rank from './pages/scoreMall/Rank'
import ArticleList from './pages/article/ArticleList'
import ArticleDetail from './pages/article/ArticleDetail'
import AwardRule from './pages/common/AwardRule'
import Recommend from './pages/recommend/Recommend'
import RecommendFeedback from './pages/recommend/RecommendFeedback'
import RecommendList from './pages/recommend/RecommendList'
import CompleteData from './pages/account/CompleteData'
import EditData from './pages/account/EditData'
import BuildingContainer from './pages/building/Container'
import Survey from './pages/building/Survey'
import Layout from './pages/building/Layout'
import Album from './pages/building/Album'
import UserCenter from './pages/Account/UserCenter'
import Consultant from './pages/customerService/Consultant'
import ExchangeFeedback from './pages/scoreMall/ExchangeFeedback'

Vue.use(Router)

const routes=[ {
  path: '/',
  alias: '/home',
  name: 'home',
  component: Home,
  meta:{
    title:'首页',
  },
},{
  path: '/login',
  name: 'login',
  component: Login,
  meta:{
    title:'登录',
  },
},{
  path: '/register/:step?',
  name: 'register',
  component: Register,
  meta:{
    title:'注册',
  },
},{
  path: '/forgetPassword/:step?',
  name: 'forgetPassword',
  component: ForgetPassword,
  meta:{
    title:'忘记密码',
  },
},{
  path: '/giftList',
  name: 'giftList',
  component: GiftList,
  meta:{
    title:'积分商城',
  },
},{
  path: '/giftDetail/:id',
  name: 'giftDetail',
  component: GiftDetail,
  meta:{
    title:'礼品详情',
  },
},{
  path: '/exchangeRecord',
  name: 'exchangeRecord',
  component: ExchangeRecord,
  meta:{
    title:'兑换记录',
  },
},{
  path: '/articleList',
  name: 'articleList',
  component: ArticleList,
  meta:{
    title:'分享美文',
  },
},{
  path: '/articleDetail/:id',
  name: 'articleDetail',
  component: ArticleDetail,
  meta:{
    title:'分享美文',
  },
},{
  path: '/awardRule/:type',
  name: 'awardRule',
  component: AwardRule,
  meta:{
    title:'奖励规则',
  },
},{
  path: '/myScore',
  name: 'myScore',
  component: MyScore,
  meta:{
    title:'我的积分',
  },
},{
  path: '/rank',
  name: 'rank',
  component: Rank,
  meta:{
    title:'金榜题名',
  },
},{
  path: '/recommend',
  name: 'recommend',
  component: Recommend,
  meta:{
    title:'推荐买房',
  },
},{
  path: '/recommendFeedback',
  name: 'recommendFeedback',
  component: RecommendFeedback,
  meta:{
    title:'推荐成功',
  },
},{
  path: '/recommendList',
  name: 'recommendList',
  component: RecommendList,
  meta:{
    title:'推荐买房',
  },
},{
  path: '/completeData',
  name: 'completeData',
  component: CompleteData,
  meta:{
    title:'完善信息',
  },
},{
  path: '/editData',
  name: 'editData',
  component: EditData,
  meta:{
    title:'修改信息',
  },
},{
  path: '/building',
  name:'building',
  component: BuildingContainer,
  meta:{
    title:'楼盘风采',
  },
  children: [
    {
      path: 'survey',
      name:'survey',
      component: Survey,
      meta:{
        title:'概况',
      },
    },
    {
      path: 'layout',
      name:'layout',
      component: Layout,
      meta:{
        title:'户型',
      },
    },
    {
      path: 'album',
      name:'album',
      component: Album,
      meta:{
        title:'相册',
      },
    }
  ]
},{
  path: '/userCenter',
  name: 'userCenter',
  component: UserCenter,
  meta:{
    title:'我的',
  },
},{
  path: '/consultant',
  name: 'consultant',
  component: Consultant,
  meta:{
    title:'置业顾问',
  },
},{
  path: '/exchangeFeedback/:id',
  name: 'exchangeFeedback',
  component: ExchangeFeedback,
  meta:{
    title:'兑换成功',
  },
}]

const router= new Router({
  routes:routes,
/*  mode: 'history',*/
  /* scrollBehavior: function (to, from, savedPosition) {
   return savedPosition || { x: 0, y: 0 }
   }*/
})

//注册全局导航守卫
router.afterEach((to, from) => {
  //修改页面title
  document.title = to.meta.title;
})
//
export default router
