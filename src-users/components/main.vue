<template>
  <div>
    <h3 v-show="firstView">请输入关键字进行搜索</h3>
    <h3 v-show="loading">loading....</h3>
    <div class="row" v-show="users.length" >
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.header_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.userName}}</p>
      </div>
    </div>
    <h3 v-show="errorMsg">请求失败</h3>
  </div>
</template>
<script>
  import PubSub from 'pubsub-js';
  import axios from 'axios';
  export default {
    data (){
      return {
        firstView : true,
        loading : false,
        users : [],
        errorMsg : ''
      }
    },
    mounted (){
      //订阅消息
      PubSub.subscribe('search',(msg,searchName)=>{
        //更新状态
        this.firstView = false;
        this.loading = true;
        this.users = [];
        //发送ajax
        const url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url)
          .then(response=>{
            this.loading = false;
            const result = response.data;
            this.users = result.items.map(user=>({
              userName :user.login,
              header_url : user.avatar_url,
              url : user.html_url
            }))
          })
          .catch(error=>{
            this.loading = false;
            this.errorMsg = '请求失败!!!';
          })
      })
    }
  }
</script>
<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
