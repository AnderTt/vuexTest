<template>
  <div>
    <h2>clicked : {{count}} times,count is {{oddEven}}</h2>
    &nbsp;<button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        count : 0,
      }
    },
    computed : {
      oddEven(){
        return this.count%2===0 ? '偶数' : '奇数';
      }
    },
    methods : {
      increment(){
        this.count++;
      },
      decrement(){
        this.count--;
      },
      incrementIfOdd(){
        if(this.count%2===1){
          this.count++;
        }
      },
      incrementAsync(){
        setTimeout(()=>{
          this.count++;
        },1000)
      }
    }
  }
</script>
<style scoped>
</style>
