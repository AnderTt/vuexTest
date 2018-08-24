<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" />
  </ul>
</template>
<script>
  import Item from './Item.vue';
  import {mapGetters} from 'vuex';
  import storageUilt from '../uilts/storageUilt'
  export default {
    components : {
      Item,
    },
    computed : {
      /*todos(){
        return this.$store.getters.todos
      }*/
      ...mapGetters(['todos'])
    },
    //不能用在app中，因为app中没有todos,list中有
    watch : {
      todos : {
        deep : true, //深度监视
        handler : storageUilt.saveTodo
      }
    },
  }
</script>
<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
