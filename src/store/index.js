/* 
* @Author: anchen
* @Date:   2018-09-10 11:00:01
* @Last Modified by:   anchen
* @Last Modified time: 2018-09-10 15:22:34
*/

import Vue from 'vue'
import Vuex from 'vuex'
//使用我们vuex，引入之后用Vue.use进行使用
Vue.use(Vuex);

const state={
    count: 1,
}
//要改变state的数值的方法，必须写在mutations里
const mutations={
        add(state,n){
            state.count = state.count + n;
        },
        reduce(state){
            state.count-=1;
        }

}
//getters计算过滤操作,相当于对数据的一个过滤和加工
//【getters】是store的计算属性。
const getters = {
        count:function(state){
            return state.count +=100;
        }
}

//actions和mutations差不多，但是是异步的改变state的状态，actions的本质是调用Mutations里的方法
    // ontext：上下文对象，这里你可以理解称store本身。
    // {commit}：直接把commit对象传递过来。
 const actions ={
        addAction(context){
            context.commit('add',11);
        },
        reduceAction({commit}){
            commit('reduce')
        }
    }

//用export default 封装代码，让外部可以引用。
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});