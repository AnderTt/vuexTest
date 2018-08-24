import axios from 'axios';

import {
  REQUESTING,
  REQUEST_SUCCESS,
  REQUEST_FAIL
} from './mutation-types'

export default {
  search({commit},searchName){
    //请求中
    commit(REQUESTING);
    //发送Ajax请求
    const url =`https://api.github.com/search/users?q=${searchName}`;
    axios.get(url)
      .then(response=>{
        //请求成功
        const result = response.data;
        const users = result.items.map(user=>({
          useName :  user.login,
          header_url : user.avatar_url,
          url : user.html_url
        }));
        commit(REQUEST_SUCCESS,{users})
      })
      .catch(error=>
        //请求失败
        commit(REQUEST_FAIL)
      )
  }
}
