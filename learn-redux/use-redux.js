import {createStore} from './redux';
//state就是状态对象，可以是数字，对象，数组等任意数据类型
//不要在reducer里面修改参数的值，读取数据库的内容
//一定要返回一个新的对象
let reducer = (state={number:0},action={})=>{
  //判断动作的类型
  switch (action.type){
    //如果加1的话，返回老状态+1
    case 'ADD':
      return {number:state.number+1};
    case 'SUB':
      return {number:state.number-1};
    default://如果是其它动作，则忽略不执行任何操作，返回老状态
      return state;
  }
}
let store = createStore(reducer);
console.log(store.getState());//{number:0}
store.dispatch({type:'ADD'});
console.log(store.getState());//{number:1}
store.dispatch({type:'ADD'});
console.log(store.getState());//{number:1}