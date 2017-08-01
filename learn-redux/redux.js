//这是一个方法，用于创建一个仓库
//reducer每个项目都不一样，所以需要作为参数参数传进来,reducer用于从老状态和action得到新状态
let createStore = (reducer)=>{
   let state;//初始的状态
    //用于返回最新的状态
   let getState = () => state;
   let listeners = [];//存放着所有的监听函数
   //提供给外界调用，用来派发action的
   let dispatch = (action)=>{
      //调用reducer,经过计算，返回新状态
     state = reducer(state,action);
     //把监听数组中的每个函数都执行一次
     listeners.forEach(listener=>listener());
   }
   //订阅状态变化事件监听
   let subscribe = listener => listeners.push(listener);
   //返回一个仓库对象
   return {
     getState,
     dispatch,
     subscribe
   }
}
//默认导出一个对象，createStore是它的一个属性
export default {createStore}