<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>
<script>
  import PubSub from 'pubsub-js';
  export default {
    data (){
      return {
        searchName : '',
      }
    },
    methods : {
      search(){
        const searchName = this.searchName.trim();
        //判断searchName是不是存在
        if(!searchName){
          return
        }
        //发布消息
        PubSub.publish('search',this.searchName);
        //清空input中的内容
        this.searchName = '';
      }
    }
  }
</script>
<style scoped>
</style>
