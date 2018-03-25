<!--礼品兑换记录-->
<template>
    <div class="exchange-record">
      <div class="survey-panel">
        <p>已兑换福利（个）</p>
        <p>2</p>
      </div>
      <div class="list-panel">
        <ul class="entry-list">
          <li v-for="(item,index) in recordList" class="entry">
            <div class="entry-bd">
              <p class="name">{{item.productName}}</p>
              <p class="info">领取时间：缺字段至缺字段</p>
              <p class="info">领取地址：缺字段</p>
            </div>
            <div class="entry-ft">
              <div class="border">
                <span class="circle left-circle"></span>
                <span class="line"></span>
                <span class="circle right-circle"></span>
              </div>
              <div class="code">
                <p class="code-content">兑  换  码：{{item.excode}}</p>
                <p class="status">未领取(枚举不明)</p>
              </div>
            </div>
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
              recordList:[],
            }
        },
        computed: {},
        watch: {},
        methods: {
          getList:function (isInit) {
            if(isInit){
              this.pager.pageNum = 1;
              this.recordList = [];
            }
            let pager={
              pageNumber:this.pager.pageNum,
              pageSize:this.pager.pageSize
            }
            let params={
              ...Vue.tools.sessionInfo(),
              ...pager
            }
            Vue.api.getExchangeRecord(params).then((resp)=>{
              if(resp.status=='success'){
                let data=JSON.parse(resp.message);
                let pager=data.pager;
                this.pager.pageNum=pager.pageNumber+1;
                this.pager.maxPage=pager.totalPageCount;
                this.pager.isLoading=false;
                this.pager.isFinished=false;
                this.recordList=this.recordList.concat(data.result);
                console.log('recordList:',this.recordList);
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
