<!--首页-->
<template>
    <div class="home">
      <div class="banner-panel">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in bannerList">
            <a href="">
              <img :src="item.url" alt="">
            </a>
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
              <div class="entry gift-entry">
                <p class="name">iPhone X</p>
                <p class="cost">1234积分</p>
                <img src="http://img11.360buyimg.com/n1/s450x450_jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg" alt="">
              </div>
              <div class="entry gift-entry">
                <p class="name">iPhone X</p>
                <p class="cost">1234积分</p>
                <img src="http://img11.360buyimg.com/n1/s450x450_jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg" alt="">
              </div>
              <div class="entry gift-entry">
                <p class="name">iPhone X</p>
                <p class="cost">1234积分</p>
                <img src="http://img11.360buyimg.com/n1/s450x450_jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg" alt="">
              </div>
              <div class="entry gift-entry">
                <p class="name">iPhone X</p>
                <p class="cost">1234积分</p>
                <img src="http://img11.360buyimg.com/n1/s450x450_jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg" alt="">
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
              bannerList:[{
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521492175127&di=aab07d8f83d848a1e8745656f5cfbf1d&imgtype=0&src=http%3A%2F%2Farticle.fd.zol-img.com.cn%2Ft_s640x2000%2Fg1%2FM05%2F0E%2F03%2FCg-4jlOtKD6IVtkmAARyvsKXnTIAAOokQOonIAABHLW926.jpg',
              },{
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521492263901&di=3acfe2696e7a7c3daa25c1193c341dfd&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150423%2Ftooopen_sy_120055683549.jpg',
              },{
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521492208686&di=0b2d990a867e17b27e3965159c8a144e&imgtype=0&src=http%3A%2F%2Fupload.yzz.cn%2F2011%2Fmonth_1109%2F1109131918f11713cf785a5739.jpg',
              },{
                url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1728978545,1031145601&fm=27&gp=0.jpg',
              },{
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521492246092&di=242ece1639bd98fc9ae39f190d0e779e&imgtype=0&src=http%3A%2F%2Ffile32.mafengwo.net%2FM00%2F62%2F35%2FwKgBs1ZEnj6AMDcBAA0lC3iD4lE70.groupinfo.w680.jpeg',
              }],
              housePurchaseTicketImg:require('../images/home/hall-example.jpg'),
              propertyTicketImg:require('../images/home/service-example.jpg'),
            }
        },
        computed: {},
        watch: {},
        methods: {
          getHomeData:function () {
            Vue.api.getHomeData({...Vue.tools.sessionInfo()}).then((resp)=>{
              console.log('resp:',resp);
            })
          },
          getGiftList:function () {
            let pager={
              pageSize:20,
              pageNumber:1
            }
            let params={
              ...Vue.tools.sessionInfo(),
              ...pager
            }
            Vue.api.getGiftList(params).then((resp)=>{
              console.log('resp:',resp);
            })
          }
        },
        created: function () {

        },
        mounted: function () {
         /* /!**!/
          this.getHomeData();
          /!**!/
          this.getGiftList();*/
         /**/
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
