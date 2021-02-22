
import { ADD_ARTICLE, USER_AUTHENTICATED } from "../constants/action-types";
import axios from 'axios'
import PromiseValue from 'promise-value';

const initialState = {
  articles: [],
  user_logged_in: false
  // axios(
  //                     {
  //                       method:'GET',
  //                       url: `http://127.0.0.1:8000/adminuser/hello/`,
  //                       headers:{
  //                         Authorization:  `Bearer ${localStorage.getItem('access_token')}`
  //                       }
  //                   }).then((res)=>{
  //                     return true
                      
  //                   }).catch(err=>{
  //                     return false
  //                   })
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === USER_AUTHENTICATED) {
    return Object.assign({}, state, {
      user_logged_in: action.payload
    });
  }
  return state;
}

export default rootReducer;