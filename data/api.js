/**
 * api分析来自 
 * https://github.com/marktony/zhuanlan/wiki
 */

const HOST = "https://zhuanlan.zhihu.com/api";
let Util = getApp().Util;

export default class  API {

     /**
     * 获得推荐栏目
     */
    static getRecommendColumns(limit,offset){
          let seed =  Math.floor(100 * Math.random());
          return Util.net.getJson(`${HOST}/recommendations/columns`,{limit : limit , offset : offset , seed : seed});    
    }

    /**
     * 获得推荐文章
     */
    static getRecommendPosts(limit,offset){
          let seed =  Math.floor(100 * Math.random());
          return Util.net.getJson(`${HOST}/recommendations/posts`,{limit : limit , offset : offset , seed : seed});    
    }


    /**
     * 获取指定的专栏信息
     */
    static getColumnsByName(columName){
        return Util.net.getJson(`${HOST}/columns/${columName}`,{});    
    }
    

    /**
     * 获取指定的专栏文章列表
     */
    static getPostsByColumnName(columName,limit,offset){
        return Util.net.getJson(`${HOST}/columns/${columName}/posts`,{limit : limit , offset : offset});    
    }

    



} 