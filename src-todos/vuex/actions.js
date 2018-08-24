/*定义间接更新状态的actions*/
import {
  ADD_TODOS,
  DELETE_TODOS,
  IS_CHECK_ALL,
  CLEAR_CHECKED,
  READ_TODOS,
  RECIEVE_TODOS
} from './mutation-types'
import storageUilt from '../uilts/storageUilt';
export default {
  addTodo({commit},todo){
    commit(ADD_TODOS,{todo})
  },
  deleteTodo({commit},index){
    commit(DELETE_TODOS,{index})
  },
  isCheckAll({commit},isCheck){
    commit(IS_CHECK_ALL,{isCheck})
  },
  clearChecked({commit}){
    commit(CLEAR_CHECKED)
  },
  readTodos({commit}){
    setTimeout(()=>{
      const todos = storageUilt.getTodo()
      commit(READ_TODOS,{todos})
    },1000)
  }
}
