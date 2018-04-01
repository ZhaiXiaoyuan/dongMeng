<!--奖励规则-->
<template>
   <div class="award-rule">
     <div v-html="ruleContent"></div>
   </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
  .award-rule{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0.5rem 0.6rem;
  }
</style>

<script>
    import Vue from 'vue'

    export default {
        components: {

        },
        data: function () {
            return {
              ruleContent:null,
            }
        },
        computed: {},
        watch: {},
        methods: {
          getAwardRule:function () {
            Vue.api.getAwardRule({...Vue.tools.sessionInfo()}).then((resp)=>{
              if(resp.status=='success'){
                this.ruleContent=resp.message;
              }
            })
          }
        },

        created: function () {
        },
        mounted: function () {
          /*获取美文分享规则*/
          this.getAwardRule();
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
