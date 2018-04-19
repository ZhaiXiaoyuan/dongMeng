<!--滚动加载组件-->
<template>
  <div>
    <div class="cm-loading" v-show="page&&page.isLoading&&!page.isFinished">
      <mt-spinner type="snake" color="#00CDB2" :size="25"></mt-spinner>
    </div>
    <div class="cm-loading" v-show="page&&page.maxPage!=0&&!page.isLoading&&page.isFinished">
      <p class="no-more">{{noData}}</p>
    </div>
    <div class="cm-loading" v-show="page&&page.maxPage==0&&!page.isLoading&&page.isFinished">
      <p class="no-more">暂无数据</p>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  .cm-loading{
    margin: 0.2rem 0rem;
    text-align: center;
    >span{
      display: inline-block;
      .mint-spinner-snake{
        border: 2px solid transparent;
      }
    }
    .no-more{
      font-size: 0.28rem;
      color: #999;
    }
  }
</style>

<script>

    import Vue from 'vue'
    import $ from 'jquery'
    /*需要用@scrolling 传入滚动的回调函数*/
    export default {
        props: {
            /**
             * 需要传进来的分页参数
             * 格式：{isLoading:false, maxPage:10, pageNum:1}
             * */
            page: {
                type: Object,
                required: false,
            },
            /**
             * 滚动监听的窗口
             * */
            window: {
                required: false,
                default: function () {
                    return window;
                }
            },
            /**
             *滚动监听的内容
             * */
            document: {
                required: false,
                default: function () {
                    return document;
                }
            },
            noData:{
              required: false,
              default: '已经没有更多数据'
            }
        },
      watch:{
        'page.pageNum':function (newValue) {
          if(this.page.maxPage<newValue){
            this.page.isFinished = true;
          }
        },
      },
        mounted: function () {
            if(!this.page){
                return;
            }
            //监听滚动事件
          $(this.window).bind('scroll', function () {
            /*如果是加载中，则返回*/
            if(this.page.isLoading || this.page.isFinished) {
              return;
            }else{
              var winTop = $(this.window).scrollTop(); //当前滚动条的高度
              var docHeight = $(this.document).height();   //页面总高度
              var winHeight = $(this.window).height();     //窗口高度
              /*触发高度比*/
              var  scrolltrigger = 0.98;
              /*什么时候会触发翻页*/
              if  ((winTop/(docHeight-winHeight)) > scrolltrigger) {
                /*是否加载中的标志，防止重复请求*/
                this.page.isLoading = true;
                /*如果未到最后一页*/
                if(this.page.type=='noTotal'){//如果分页对象没有total、maxPage分页数据
                  if(this.page.resultLength==this.page.pageSize){
                    /*执行回调*/
                    this.$emit('scrolling');
                    /*如果是最后一页了*/
                  }else{
                    this.page.isLoading = false;
                    this.page.isFinished = true;
                  }
                }else{
                  if(this.page.maxPage == undefined || this.page.maxPage >= this.page.pageNum){
                    /*执行回调*/
                    this.$emit('scrolling');
                    /*如果是最后一页了*/
                  }else{
                    this.page.isLoading = false;
                    this.page.isFinished = true;
                  }
                }
              }
            }
          }.bind(this));
        }
    }


</script>
