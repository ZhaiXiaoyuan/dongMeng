/**
 * Created by Designer on 2017/12/21.
 */
import router from '../router'


export default {
  install: function (Vue, options) {


    Vue.http.options.emulateJSON = true;
    Vue.http.interceptors.push((request, next)  =>{

      next((response) => {
        //对于有作登录状态的接口你，未未登录时跳转到登录页
        if(response.status==401){
          router.push({name:'login'});
        }
        return response
      });

    });
    /*自定义ajax函数，自带的不好用*/
    Vue.http.ajax = async function (options) {
      if(options.method.toUpperCase() == 'GET'){
        let res = await Vue.http.get(options.url, {params: options.params});
        if(typeof res.body == 'string'){
          return JSON.parse(res.body);
        }else{
          return res.body;
        }
      }else if(options.method.toUpperCase() == 'POST'){
        let res = await Vue.http.post(options.url, options.params);
        if(typeof res.body == 'string'){
          return JSON.parse(res.body);
        }else{
          return res.body;
        }
      }
    }

    /**/
    let basicUrl='http://www.grfame.com/dmjywxs';
    Vue.api={
      //首页数据
      getHomeData:function (params) {
        return Vue.http.ajax({
          method: 'post',
          url: basicUrl+'/cus/info/index',
          params: params
        });
      },
      //礼品列表
      getGiftList:function (params) {
        return Vue.http.ajax({
          method: 'post',
          url: basicUrl+'/mk/present/qpro',
          params: params
        });
      },
      //礼品详情
      getGiftDetail:function (params) {
        return Vue.http.ajax({
          method: 'post',
          url: basicUrl+'/mk/present/vpro',
          params: params
        });
      },
      //礼品兑换
      exchangeGift:function (params) {
        return Vue.http.ajax({
          method: 'post',
          url: basicUrl+'/mk/present/expro',
          params: params
        });
      },
      //礼品兑换记录
      getExchangeRecord:function (params) {
        return Vue.http.ajax({
          method: 'post',
          url: basicUrl+'/mk/present/qexd',
          params: params
        });
      },
      //签到
      signIn:function (params) {
        return Vue.http.ajax({
          method: 'post',
          url: basicUrl+'/mk/award/sign',
          params: params
        });
      },
      //获取美文列表
      getArticleList:function (params) {
        return Vue.http.ajax({
          method: 'post',
          url: basicUrl+'/mk/recus/qart',
          params: params
        });
      },
    }
  },

}
