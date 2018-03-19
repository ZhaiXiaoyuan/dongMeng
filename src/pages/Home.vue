<!--首页-->
<template>
    <div class="home">
      <div class="banner-panel">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in bannerList" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
          </div>
          <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">

</style>

<script>
    import Vue from 'vue'
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';

    export default {
        components: {

        },
        data: function () {
            return {
              bannerList:[{
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521492175127&di=aab07d8f83d848a1e8745656f5cfbf1d&imgtype=0&src=http%3A%2F%2Farticle.fd.zol-img.com.cn%2Ft_s640x2000%2Fg1%2FM05%2F0E%2F03%2FCg-4jlOtKD6IVtkmAARyvsKXnTIAAOokQOonIAABHLW926.jpg',
              },{
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521492208686&di=0b2d990a867e17b27e3965159c8a144e&imgtype=0&src=http%3A%2F%2Fupload.yzz.cn%2F2011%2Fmonth_1109%2F1109131918f11713cf785a5739.jpg',
                url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1728978545,1031145601&fm=27&gp=0.jpg',
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521492246092&di=242ece1639bd98fc9ae39f190d0e779e&imgtype=0&src=http%3A%2F%2Ffile32.mafengwo.net%2FM00%2F62%2F35%2FwKgBs1ZEnj6AMDcBAA0lC3iD4lE70.groupinfo.w680.jpeg',
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521492263901&di=3acfe2696e7a7c3daa25c1193c341dfd&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20150423%2Ftooopen_sy_120055683549.jpg',
              }]
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
          var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            speed: 600,
            autoplay: 4000,
            onTouchEnd: function() {
              swiper.startAutoplay()
            }
          });
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
