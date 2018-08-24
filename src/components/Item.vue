<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background : bgColor}">
    <label>
      <input type="checkbox" v-model="todo.completed"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>
<script>
  export default {
    props : {
      todo : {
        type : Object,
        required : true
      },
      index : {
        type : Number,
        required : true
      },
    },
    data(){
      return {
        isShow : false,
        bgColor : '#ffffff'
      }
    },
    methods : {
      handleEnter(isEnter){
        if(isEnter){
          this.isShow = true;
          this.bgColor='#eeeeee'
        }else{
          this.isShow = false;
          this.bgColor='#ffffff'
        }
      },
      deleteItem(){
        this.$store.dispatch('deleteTodo',this.index)
      }
    }
  }
</script>
<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
