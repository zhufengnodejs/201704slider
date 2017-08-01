import counter from './counter';
import todos from './todos';
import {combineReducers} from 'redux';
//把两个reducer合并成一个reducer
let reducer = combineReducers({
  a:counter,
  b:todos
});

function reducer(state,action){
  //这是最终的返回的合并后的状态树
  let combinedState = {};
  combinedState.a = counter(state.a,action);//{number:1}
  combinedState.b = todos(state.b,action);//{list:[]}
  return combinedState;
  // {counter:{number:1},todos:{list:[]}}
  //
}



export default reducer;