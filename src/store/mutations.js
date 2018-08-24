import {
  REQUESTING,
  REQUEST_SUCCESS,
  REQUEST_FAIL
} from './mutation-types'
export default {
  [REQUESTING](state){
    state.firstView = false;
    state.loading = true;
    state.users = [];
    state.errorMsg = '';
  },
  [REQUEST_SUCCESS](state,{users}){
    state.loading = false;
    state.users=users
  },
  [REQUEST_FAIL](state,{users}){
    state.loading = false;
    state.errorMsg='请求失败'
  }
}
