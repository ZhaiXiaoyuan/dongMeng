<!--首页-->
<template>
    <div class="home">
      <div class="banner-panel">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in bannerList" :key="item.id">
            <a v-bind:href="item.url"><img :src="item.imageUrl"></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>

        </swiper>
      </div>
      <div class="panel">
        <div class="panel-bd">
          <div class="entrance-list">
            <div class="item">
              <i class="icon building-icon"></i>
              <p class="text">楼盘风采</p>
            </div>
            <div class="item">
              <i class="icon consultant-icon"></i>
              <p class="text">置业顾问</p>
            </div>
            <div class="item">
              <i class="icon wechat-icon"></i>
              <p class="text">关注公众号</p>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-hd arrows-right">
          <span class="title">
            <i class="icon earn-font-icon"></i>
            积分
          </span>
          <span class="link">奖励规则</span>
        </div>
        <div class="panel-bd">
          <div class="entrance-list">
            <div class="item item-sm">
              <i class="icon book-icon"></i>
              <p class="text">完善资料</p>
            </div>
            <div class="item item-sm">
              <i class="icon add-member-icon"></i>
              <p class="text">邀请好友</p>
            </div>
            <div class="item item-sm">
              <i class="icon praise-icon"></i>
              <p class="text">推荐买房</p>
            </div>
            <div class="item item-sm">
              <i class="icon share-icon"></i>
              <p class="text">分享美文</p>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-hd">
          <span class="title">
            <i class="icon use-font-icon"></i>
            积分
          </span>
          <span class="link">更多</span>
        </div>
        <div class="panel-bd">
          <div class="entry-list">
            <div class="entry ticket-entry">
              <p class="name">购房券</p>
              <img :src="housePurchaseTicketImg" alt="">
              <i class="icon label-icon"></i>
            </div>
            <div class="entry ticket-entry">
              <p class="name">物业券</p>
              <img :src="propertyTicketImg" alt="">
              <i class="icon label-icon"></i>
            </div>
          </div>
          <div class="entry-list">
            <div class="entry-list">
              <div v-for="(item,key,index) in giftList" class="entry gift-entry">
                <p class="name">{{item.name}}</p>
                <p class="cost">{{item.score}}积分</p>
                <img :src="item.image" :alt="item.name">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">

</style>

<script>
    import Vue from 'vue'
    import  { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        components: {
          swiper,
          swiperSlide
        },
        data: function () {
            return {
              swiperOption: {
                pagination: {
                  el: '.swiper-pagination'
                }
              },
              bannerList:[],
              housePurchaseTicketImg:require('../images/home/hall-example.jpg'),
              propertyTicketImg:require('../images/home/service-example.jpg'),
              isFull:false,//true:已完善资料，false:未完善资料
              canSign:false,//true:可签到，false:已签到
              giftList:[],
            }
        },
        computed: {},
        watch: {},
        methods: {
          getHomeData:function () {
            Vue.api.getHomeData({...Vue.tools.sessionInfo()}).then((resp)=>{
              if(resp.status=='success'){
                var data=JSON.parse(resp.message);
                this.bannerList=data.adves;
                this.isFull=data.isFull?true:false;
                this.canSign=data.canSign?true:false
              }
            })
          },
          getGiftList:function () {
            let pager={
              pageSize:4,
              pageNumber:1
            }
            let params={
              ...Vue.tools.sessionInfo(),
              ...pager
            }
            Vue.api.getGiftList(params).then((resp)=>{
              console.log('resp:',resp);
              if(resp.status=='success'){
                let data=JSON.parse(resp.message);
                this.giftList=data.result;
              }
            })
          }
        },

        created: function () {
        },
        mounted: function () {
          /**/
          this.getHomeData();
          /**/
          this.getGiftList();

        },
        route: {
           /* data: function(transition) {
                return Vue.utils.getCustomer().then(function (data) {
                    {
                        return {}
                    }
                });


            },
            waitForData: true,*/
        }

    };
</script>
