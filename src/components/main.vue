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
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['firstView','loading','users','errorMsg'])
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
