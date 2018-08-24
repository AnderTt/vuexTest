/*定义直接更新状态的mutations*/
import {ADD_TODOS,DELETE_TODOS,IS_CHECK_ALL,CLEAR_CHECKED,READ_TODOS} from './mutation-types'
export default {
  [ADD_TODOS](state,{todo}){
    state.todos.unshift(todo)
  },
  [DELETE_TODOS](state,{index}){
    state.todos.splice(index,1)
  },
  [IS_CHECK_ALL](state,{isCheck}){
    state.todos.forEach(todo=>todo.completed=isCheck)
  },
  [CLEAR_CHECKED](state){
    state.todos=state.todos.filter(todo=>!todo.completed)
  },
  [CLEAR_CHECKED](state){
    state.todos=state.todos.filter(todo=>!todo.completed)
  },
  [READ_TODOS](state,{todos}){
    state.todos=todos
  }
}
