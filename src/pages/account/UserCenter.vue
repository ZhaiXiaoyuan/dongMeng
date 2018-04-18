<!--用户中心-->
<template>
    <div class="user-center">
      <div class="survey-panel">
        <div class="avatar">
          <img :src="userInfo&&userInfo.touxiang?userInfo.touxiang:defaultAvatar">
        </div>
        <p class="name">{{userInfo&&userInfo.username?userInfo.username:'微信姓名'}}</p>
        <p class="phone" v-if="userInfo&&userInfo.isfull">电话 {{userInfo.mobilephone}}</p>
        <router-link :to="{ name: 'completeData', params: {}}" class="handle-btn" v-if="userInfo&&!userInfo.isfull">
          <i class="icon edit-icon"></i>
          完善资料
        </router-link>
        <router-link :to="{ name: 'editData', params: {}}" class="handle-btn"  v-if="userInfo&&userInfo.isfull">
          <i class="icon edit-icon"></i>
          修改资料
        </router-link>
      </div>
      <div class="menu-panel">
        <ul class="menu-list">
          <router-link :to="{ name: 'myScore', params: {}}" tag="li"  class="item arrows-right">
             <span class="icon-wrap">
               <i class="icon score-grey-icon"></i>
             </span>
             <span class="field">我的积分</span>
          </router-link>
          <li class="item arrows-right" :class="{'cm-disabled':!canSign}" @click="signInModal()">
             <span class="icon-wrap">
               <i class="icon calendar-grey-icon"></i>
             </span>
            <span class="field">{{canSign?'每天签到':'已签到'}}</span>
          </li>
          <router-link :to="{ name: 'recommend', params: {}}" tag="li"  class="item arrows-right">
             <span class="icon-wrap">
               <i class="icon praise-grey-icon"></i>
             </span>
            <span class="field">推荐买房</span>
          </router-link>
          <router-link :to="{ name: 'exchangeRecord', params: {}}" tag="li"  class="item arrows-right">
             <span class="icon-wrap">
               <i class="icon present-grey-icon"></i>
             </span>
            <span class="field">我的兑换</span>
          </router-link>
          <router-link :to="{ name: 'giftList', params: {}}" tag="li"  class="item arrows-right">
             <span class="icon-wrap">
               <i class="icon shopping-grey-icon"></i>
             </span>
            <span class="field">兑换商城</span>
          </router-link>
          <router-link :to="{ name: 'rank', params: {}}" tag="li"  class="item arrows-right">
             <span class="icon-wrap">
               <i class="icon cup-grey-icon"></i>
             </span>
            <span class="field">金榜题名</span>
          </router-link >
        </ul>
      </div>
      <nav-bar></nav-bar>
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
              userInfo:null,
              name:null,
              phone:null,
              code:null,
              defaultAvatar:require('../../images/common/default-avatar.png'),
              canSign:false,//true:可签到，false:已签到
            }
        },
        computed: {},
        watch: {},
        methods: {
          getHomeData:function () {
            Vue.api.getHomeData({...Vue.tools.sessionInfo()}).then((resp)=>{
              if(resp.status=='success'){
                var data=JSON.parse(resp.message);
                this.canSign=data.canSign?true:false
              }
            })
          },
          getUserInfo:function () {
            Vue.api.getUserInfo({...Vue.tools.sessionInfo()}).then((resp)=>{
              if(resp.status=='success'){
                this.userInfo=JSON.parse(resp.message);
                this.name=this.userInfo.username;
              }else{

              }
            })
          },

        },
        created: function () {
        },
        mounted: function () {
          /**/
          this.getHomeData();
          /**/
          this.getUserInfo();
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
