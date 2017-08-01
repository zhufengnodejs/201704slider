import React from 'react';
import store from '../store';
import * as actionTypes from '../action-types';
export default class Counter extends React.Component{
  constructor(){
    super();
    this.state = {number:store.getState().number};
    this.subscribe();
  }
 /* componentDidMount(){
    //订阅之后会返回一个取消订阅的函数
      this.subscribe();
  }*/
  subscribe = ()=>{
    this.unsubscribe = store.subscribe(()=>{
      //改变state之后组件会立即重新渲染
      //setState(...): Can only update a mounted or mounting component. This usually means you called setState() on an unmounted component.
      this.setState({number:store.getState().number});
    })
  }
  // 在组件卸载之前调用一下取消订阅函数
  componentWillUnmount(){
    console.log('componentWillUnmount');
    //this.unsubscribe();
  }

  render(){
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch({type:actionTypes.ADD})}>+</button>
        <button onClick={()=>store.dispatch({type:actionTypes.SUB})}>-</button>
        <button onClick={()=>this.unsubscribe()}>别再通知我了，我不关心store状态变化事件了</button>
        <button onClick={this.subscribe}>还是再通知我吧，我又开始关心store状态变化事件了</button>
        <button onClick={this.props.killMySelf}>自杀</button>
      </div>
    )
  }
}