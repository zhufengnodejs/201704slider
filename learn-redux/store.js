import {createStore} from 'redux';
//reducer会通过老状态和action，返回新的状态对象 state tree
import * as actionTypes from './action-types';
let reducer = (state={number:0},action={})=>{
  switch(action.type){
    case actionTypes.ADD:
      return {number:state.number+1};
    case actionTypes.SUB:
      return {number:state.number -1};
    default:
      return state;
  }
}
let store = createStore(reducer);
window.store = store;
export default store;
