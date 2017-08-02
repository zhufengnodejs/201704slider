import React from 'react';
import store from '../store';
import * as types from '../action-types';
export default class Counter extends React.Component{
  constructor(){
    super();
    this.state = {number:store.getState().counter.number};
  }
  componentDidMount(){
    //当组件加载完成后开始让当前组件订阅仓库状态变化事件。当仓库中的状态树发生改变的时候会调用setState方法，从而重新渲染(render)组件
    this.unsubscribe = store.subscribe(()=>{
      this.setState({number:store.getState().counter.number});
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch({type:types.ADD})}>+</button>
        <button onClick={()=>store.dispatch({type:types.SUB})}>-</button>
      </div>
    )
  }
}