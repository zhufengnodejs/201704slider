//初始状态对象，维护了一个空数组
let initState = {list:[]};
import * as types from '../action-types';
export default function(state=initState,action){
  switch(action.type){
    case types.ADD_TODO:
      //把老数组展开，再加入新的值
      return {list:[...state.list,action.text]};
    case types.DELETE_TODO:
      //删除指定索引的元素
      return {list:state.list.filter((item,index)=>index!=action.index)};
    default:
      return state;
  }
}