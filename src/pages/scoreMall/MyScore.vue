<!--我的积分-->
<template>
    <div class="my-score">
      <div class="survey-panel">
        <div class="panel-bd">
          <p>可用积分</p>
          <p>{{score}}</p>
        </div>
        <div class="panel-ft">
          <router-link :to="{ name: 'giftList'}" class="arrows-right" tag="div">
            <i class="icon shopping-icon"></i>
            兑换商城
          </router-link>
          <router-link :to="{ name: 'exchangeRecord'}" class="arrows-right" tag="div">
            <i class="icon gift-icon"></i>
            我的兑换
          </router-link>
        </div>
      </div>
      <div class="list-panel">
        <div class="panel-hd">
          <span>收入300</span>
          <span>支出1200</span>
        </div>
        <div class="panel-bd">
          <ul class="entry-list">
            <li class="entry" v-for="(entry,index) in entryList">
              <div class="entry-bd">
                <span class="field">{{entry.biztypeLabel}}</span>
                <span class="value" :class="{'error':!entry.pmflag}"><i class="icon">{{entry.pmflag?'+':'-'}}</i>{{entry.score}}</span>
              </div>
              <div class="entry-ft">
                {{entry.createtime||formatDate('MM-dd hh:mm')}}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <scroll-load :page="pager" @scrolling="getGiftList()"></scroll-load>
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
              entryList:[],
              score:0,
            }
        },
        computed: {},
        watch: {},
        methods: {
          getList:function (isInit) {
            if(isInit){
              this.pager.pageNum = 1;
              this.entryList = [];
            }
            let pager={
              pageNumber:this.pager.pageNum,
              pageSize:this.pager.pageSize
            }
            let params={
              ...Vue.tools.sessionInfo(),
              ...pager,
              type:1,//收入/奖励=1 | 支付/兑换=0
            }
            Vue.api.getScoreRecordList(params).then((resp)=>{
              if(resp.status=='success'){
                let data=JSON.parse(resp.message);
                let pager=data.pager;
                this.pager.pageNum=pager.pageNumber+1;
                this.pager.maxPage=pager.totalPageCount;
                this.pager.isLoading=false;
                this.pager.isFinished=false;
                this.entryList=this.entryList.concat(data.result);
              }
            })
          },
          getScore:function () {
            Vue.api.getScore({...Vue.tools.sessionInfo()}).then((resp)=>{
              if(resp.status=='success'){
                this.score=resp.message;
              }
            });
          }
        },

        created: function () {
        },
        mounted: function () {
          /*获取可用积分*/
          this.getScore();
          /**/
          this.getList(true);

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
