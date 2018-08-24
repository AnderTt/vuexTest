<template>
  <div>
    <h2>clicked : {{count}} times,count is {{oddEven}}</h2>
    &nbsp;&nbsp;<button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>
<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    computed : {
      /*count(){
        return this.$store.state.count
      },*/
      ...mapState(['count']), // {count (){return this.$store.state.count}}
      /*oddEven(){
        return this.$store.getters.oddEven;
      }*/
      ...mapGetters(['oddEven'])
    },
    methods : {
      /*increment(){
        this.$store.dispatch('increment')
      },
      decrement(){
        this.$store.dispatch('decrement')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }*/
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    }
  }
</script>
<style scoped>
</style>
