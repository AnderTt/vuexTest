<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader/>
      <List/>
      <todo-footer/>
    </div>
  </div>
</template>
<script>
  import Header from './components/Header.vue';
  import List from './components/List.vue';
  import Footer from './components/Footer.vue';
  export default {
    components : {
      TodoHeader : Header,
      List,
      TodoFooter : Footer
    },
    mounted(){
      this.$store.dispatch('readTodos')
    }
  }
</script>
<style scoped>
</style>
