<!--美文详情-->
<template>
    <div class="article-detail">
      <div class="article-panel" v-if="article">
        <p class="title">{{article.title}}</p>
        <p class="time">{{article.deploytime.split('.')[0]|formatDate('yyyy年MM月dd日')}}</p>
        <div class="content-container" v-html="article.content"></div>
      </div>
      <div class="handle-btn"  @click="checkUserInfo(()=>{shareGuide()})">分享这篇好文给朋友</div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
</style>

<script>
    import Vue from 'vue'

    export default {
        components: {

        },
        data: function () {
            return {
              article:null,
              test:22,
            }
        },
        computed: {},
        watch: {

        },
        methods: {
          getArticleDetail:function () {
            let that=this;
            let params={
              ...Vue.tools.sessionInfo(),
              aid:this.$route.params.id
            }
            Vue.api.getArticleDetail(params).then((resp)=>{
              if(resp.status=='success'){
                this.article=JSON.parse(resp.message);

                /*微信分享配置*/
                Vue.tools.shareConfig({
                  title: that.article.title,
                  desc:that.article.remark,
                  link: window.location.href,
                  imgUrl: that.article.titlepicUrl,
                  callback:()=>{
                    Vue.api.getShareArticelAward({...Vue.tools.sessionInfo(),aid:that.article.id}).then((resp)=>{
                      if(resp.status=='success'){
                        Vue.operationFeedback({type:'complete',text:'分享成功，购房币+'+resp.message});
                      }
                    });
                  }
                });
              }
            });
          }
        },

        created: function () {
        },
        mounted: function () {
         /**/
          this.getArticleDetail();

        },

    };
</script>
