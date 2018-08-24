<template>
  <div class="container">
    <Search/>
    <UserMain/>
  </div>
</template>
<script>
  import Search  from './components/search.vue';
  import Main from './components/main.vue';
  export default {
    components : {
      Search,
      UserMain : Main,
    }
  }
</script>
<style scoped>
</style>
