<!--礼品兑换记录-->
<template>
    <div class="exchange-record">
      <div class="survey-panel">

      </div>
      <div class="list-panel">
        <ul class="entry-list">
          <li class="entry">

          </li>
        </ul>
      </div>
      <scroll-load :page="pager" :no-data="'已经没有更多纪录了～'" @scrolling="getList()"></scroll-load>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">

</style>

<script>
    import Vue from 'vue'

    export default {
        components: {

        },
        data: function () {
            return {
              pager:{
                pageNum: 1,
                pageSize: 20,
                isLoading:false,
                isFinished:false
              },
              giftList:[],
            }
        },
        computed: {},
        watch: {},
        methods: {
          getList:function (isInit) {
            if(isInit){
              this.pager.pageNum = 1;
              this.giftList = [];
            }
            let pager={
              pageNumber:this.pager.pageNum,
              pageSize:this.pager.pageSize
            }
            let params={
              ...Vue.tools.sessionInfo(),
              ...pager
            }
            Vue.api.getGiftList(params).then((resp)=>{
              if(resp.status=='success'){
                let data=JSON.parse(resp.message);
                let pager=data.pager;
                this.pager.pageNum=pager.pageNumber+1;
                this.pager.maxPage=pager.totalPageCount;
                this.pager.isLoading=false;
                this.pager.isFinished=false;
                this.giftList=this.giftList.concat(data.result);
              }
            })
          }
        },

        created: function () {
        },
        mounted: function () {
          /**/
          this.getList();

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
