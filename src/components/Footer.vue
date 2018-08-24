<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成 {{completeCount}} </span> / 全部 {{totalCount}}
    </span>
    <button class="btn btn-danger" @click="clearCompleted">清除已完成任务</button>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    computed : {
      ...mapGetters(['completeCount','totalCount']),
      checkAll : {
        get () {
         return this.$store.getters.checkAll
        },
        set (value) { //value是指input框是否选中
          this.$store.dispatch('isCheckAll',value)
        }
      }
    },
    methods : {
      clearCompleted(){
        if(window.confirm('确定删除吗？')){
          this.$store.dispatch('clearChecked');
        }
      }
    }
  }
</script>
<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
