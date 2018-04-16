<!--户型-->
<template>
    <div class="layout">
      <div class="pic-list-panel">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in itemList" :key="item.id">
            <div class="item-wrap">
              <div class="img-wrap" :style="{background: 'url('+item.imageUrl+') no-repeat center',backgroundSize: 'cover'}"></div>
              <div class="info-panel">
                <div class="panel-hd">
                  <p class="title">{{item.name}}</p>
                  <ul class="label-list">
                    <li>{{itme.style}}</li>
                    <li>{{itme.areas}}</li>
                    <li>{{item.aveprice}}</li>
                    <li>{{item.allprice}}</li>
                  </ul>
                </div>
                <div class="panel-bd" v-html="item.remark">

                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
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
                direction: 'vertical',
                slidesPerView: 1,
                spaceBetween: 0,
                mousewheel: true,
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
              },
              itemList:[]
            }
        },
        computed: {},
        watch: {},
        methods: {
          getLayoutInfo:function () {
            let params={
              ...Vue.tools.sessionInfo(),
            }
            Vue.api.getLayoutInfo(params).then((resp)=>{
              if(resp.status=='success'){
                this.itemList=JSON.parse(resp.message);
              }
            })
          },
        },

        created: function () {
        },
        mounted: function () {
          /**/
          this.getLayoutInfo();
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
