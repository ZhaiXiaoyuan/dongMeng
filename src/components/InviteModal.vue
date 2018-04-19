<template>
  <modal :options="options" :class="'invite-modal'" ref="modal">
    <div class="modal-header">
      <i class="icon close-icon close-btn" @click="close()"></i>
    </div>
    <div class="modal-body">
      <ul class="info-list">
        <li class="item">
          <span class="index">1</span>
          <div class="item-content">
            <p>
              分享此页面到朋友圈，邀请好友访问
              微官网完善信息后，您可以获得购房
              币。
            </p>
            <p>
              <i class="icon coin-icon"></i>
              <em>50购房币/人 </em>
              <span>每人每日最多10000次</span>
            </p>
          </div>
        </li>
        <li class="item">
          <span class="index">2</span>
          <div class="item-content">
            <p>
              好友再邀请其他人访问微官网，完善
              信息后，您还可以获得购房币。
            </p>
            <p>
              <i class="icon coin-icon"></i>
              <em>0购房币/人</em>
              <span>每人每日最多10000次</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="modal-footer">
      <div class="share-btn" @click="ok()">
        <p>分享至</p>
        <i class="icon wechat-icon"></i>
        <p>微信</p>
      </div>
    </div>
  </modal>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  .invite-modal{
    .modal-content{
      width: 75% !important;
      border-radius: 0.16rem !important;
      background: #F8F8F8 !important;;
      overflow: hidden;
    }
    .modal-header{
      text-align: right;
      background: #fff;
      padding: 0.2rem 0.16rem !important;
    }
    .modal-body{
      background: #fff;
      padding: 0rem 0.24rem 0.3rem 0.24rem !important;
    }
    .item{
      .index{
        position: relative;
        top:0.06rem;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        font-size: 0.28rem;
        color: #fff;
        background: linear-gradient(#01DAA4, #11C3B2); /* 标准的语法 */
      }
      .item-content{
        padding-left: 0.6rem;
        text-align: left;
        line-height: 0.54rem;
        font-size: 0.28rem;
        color: #333;
        p{
          display: flex;
          align-items: center;
          .icon{
            margin-right: 0.08rem;
          }
          em{
            color: #FFB200;
            margin-right: 0.08rem;
          }
          span{
            font-size: 0.24rem;
            color: #ccc;
          }
        }
      }
    }
    .modal-footer{
      display: flex;
      justify-content: center;
      border-top: none !important;
      text-align: center;
      padding: 0.3rem 0.2rem;
    }
    .share-btn{
      display: inline-block;
      p{
        font-size: 0.24rem;
        color: #aaa;
      }
      .icon{
        margin: 0.08rem 0rem 0.04rem 0rem;
        &+p{
          font-size: 0.2rem;
          color: #01DAA4;
        }
      }
    }
  }
</style>
<script>
  import Vue from 'vue'
  export default {
    components: {

    },
    props:{
      options: {
        type: Object,
        default:function () {
          return {
            ok:null,//确定的回调
            cancel:null,//取消的回调
          }
        }
      }
    },
    data: function () {
      return {

      }
    },
    computed: {},
    watch: {

    },
    methods: {
      ok:function () {
        this.close();
        this.options.ok&&this.options.ok();
        this.shareGuide();
      },
      close:function () {
        this.$refs.modal.close();
      },
      open:function () {
        this.show=true;
      }
    },
    created: function () {

    },
    mounted: function () {

    }
  };
</script>
