<template>
    <div>
        <h2>{{msg}}={{$store.state.count}}</h2>
        <!-- <h2>{{msg}}={{$store.getters.count}}</h2> -->
        <hr>
        <button @click="$store.commit('add',10)">加</button>
        <button @click="$store.commit('reduce')">减</button>
        <button @click="addAction">异步加</button>
    </div>
</template>

<script>
import store from '@/store/index.js'
 import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  name: 'count',
  data () {
    return {
      msg: 'count',
    }
  },
  store,

  // 模板获取Mutations方法
  // methods:mapMutations([
  //           'add','reduce'
  //   ]),
  
  // 模板获取方法
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction','reduceAction'])
  }

  //通过computed的计算属性直接赋值
  // computed:{
  //   count(){
  //       return this.$store.state.count;
  //   }
  // }
  
  //通过mapState的对象来赋值
  // computed:mapState({
  //   count:state=>state.count
  // })

  // computed:{
  //       ...mapGetters(["count"])
  //       },

}
</script>