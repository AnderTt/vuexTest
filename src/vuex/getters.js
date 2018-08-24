export default {
  todos(state){
    return state.todos
  },
  completeCount(state){
    return state.todos.reduce((preTotal,todo)=>{
      return preTotal + (todo.completed ? 1 : 0)
    },0)
  },
  totalCount(state){
    return state.todos.length
  },
  checkAll(state,getters){
    return getters.totalCount === getters.completeCount && getters.completeCount>0 ;
  }
}
