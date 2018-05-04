import Vue from 'vue'
import Router from 'vue-router'
/*import Home from './pages/Home.vue'
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
import ExchangeFeedback from './pages/scoreMall/ExchangeFeedback'*/

Vue.use(Router)


const routes=[ {
  path: '/',
  alias: '/home',
  name: 'home',
  component: resolve=>require(['./pages/Home'],resolve),
  meta:{
    title:'首页',
  },
},{
  path: '/giftList',
  name: 'giftList',
  component: resolve=>require(['./pages/scoreMall/GiftList'],resolve),
  meta:{
    title:'积分商城',
  },
},{
  path: '/giftDetail/:id',
  name: 'giftDetail',
  component: resolve=>require(['./pages/scoreMall/GiftDetail'],resolve),
  meta:{
    title:'礼品详情',
  },
},{
  path: '/exchangeRecord',
  name: 'exchangeRecord',
  component: resolve=>require(['./pages/scoreMall/ExchangeRecord'],resolve),
  meta:{
    title:'兑换记录',
  },
},{
  path: '/articleList',
  name: 'articleList',
  component: resolve=>require(['./pages/article/ArticleList'],resolve),
  meta:{
    title:'分享美文',
  },
},{
  path: '/articleDetail/:id',
  name: 'articleDetail',
  component: resolve=>require(['./pages/article/ArticleDetail'],resolve),
  meta:{
    title:'分享美文',
  },
},{
  path: '/awardRule/:type',
  name: 'awardRule',
  component: resolve=>require(['./pages/common/AwardRule'],resolve),
  meta:{
    title:'奖励规则',
  },
},{
  path: '/myScore',
  name: 'myScore',
  component: resolve=>require(['./pages/scoreMall/MyScore'],resolve),
  meta:{
    title:'我的积分',
  },
},{
  path: '/rank',
  name: 'rank',
  component: resolve=>require(['./pages/scoreMall/Rank'],resolve),
  meta:{
    title:'金榜题名',
  },
},{
  path: '/recommend',
  name: 'recommend',
  component: resolve=>require(['./pages/recommend/Recommend'],resolve),
  meta:{
    title:'推荐买房',
  },
},{
  path: '/recommendFeedback',
  name: 'recommendFeedback',
  component: resolve=>require(['./pages/recommend/RecommendFeedback'],resolve),
  meta:{
    title:'推荐成功',
  },
},{
  path: '/recommendList',
  name: 'recommendList',
  component: resolve=>require(['./pages/recommend/RecommendList'],resolve),
  meta:{
    title:'推荐买房',
  },
},{
  path: '/completeData',
  name: 'completeData',
  component: resolve=>require(['./pages/account/CompleteData'],resolve),
  meta:{
    title:'完善信息',
  },
},{
  path: '/editData',
  name: 'editData',
  component: resolve=>require(['./pages/account/EditData'],resolve),
  meta:{
    title:'修改信息',
  },
},{
  path: '/building',
  name:'building',
  component: resolve=>require(['./pages/building/Container'],resolve),
  meta:{
    title:'楼盘风采',
  },
  children: [
    {
      path: 'survey',
      name:'survey',
      component: resolve=>require(['./pages/building/Survey'],resolve),
      meta:{
        title:'概况',
      },
    },
    {
      path: 'layout',
      name:'layout',
      component: resolve=>require(['./pages/building/Layout'],resolve),
      meta:{
        title:'户型',
      },
    },
    {
      path: 'album',
      name:'album',
      component: resolve=>require(['./pages/building/Album'],resolve),
      meta:{
        title:'相册',
      },
    }
  ]
},{
  path: '/userCenter',
  name: 'userCenter',
  component: resolve=>require(['./pages/account/UserCenter'],resolve),
  meta:{
    title:'我的',
  },
},{
  path: '/consultant',
  name: 'consultant',
  component: resolve=>require(['./pages/customerService/Consultant'],resolve),
  meta:{
    title:'置业顾问',
  },
},{
  path: '/exchangeFeedback/:id',
  name: 'exchangeFeedback',
  component: resolve=>require(['./pages/scoreMall/exchangeFeedback'],resolve),
  meta:{
    title:'兑换成功',
  },
}]

/*
const routes=[ {
  path: '/',
  alias: '/home',
  name: 'home',
  component: Home,
  meta:{
    title:'首页',
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
}]*/

const router= new Router({
  routes:routes,
/*  mode: 'history',*/
  /* scrollBehavior: function (to, from, savedPosition) {
   return savedPosition || { x: 0, y: 0 }
   }*/
})

//注册全局导航守卫
router.afterEach((to, from) => {
  if(to.query.openid){
    localStorage.setItem('number',to.query.openid);
  }
  if(to.query.sopenid){
    localStorage.setItem('sopenid',to.query.sopenid);
  }
  //修改页面title
  document.title = to.meta.title;
})
//
export default router
