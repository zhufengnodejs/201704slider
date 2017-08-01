import counter from './counter';
import todos from './todos';
import {combineReducers} from 'redux';

//把两个reducer合并成一个reducer
let reducer = combineReducers({
  counter,//{number:0} state.counter.number
  todos//{list:[]} state.todos.list
});

// reducer => state {a,b}
//state action
/*function reducer(state,action){
  //这是最终的返回的合并后的状态树
  let newState = {};
  newState.a = counter(state.a,action);//{number:0}
  newState.b = todos(state.b,action);//{list:[]}
  return newState;
  // {counter:{number:1},todos:{list:[]}}
  //
}*/
/*
let combineReducers = (reducerObj)=>{
  return function(state,action){
    let newState = {};
    // attr=a 循环对象的所有的属性
    for(let attr in reducerObj){
      newState[attr] = reducerObj[attr](state[attr],action);
    }
    return newState;
  }
}*/


export default reducer;