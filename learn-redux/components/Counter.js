import React from 'react';
import store from '../store';
import * as actionTypes from '../action-types';
export default class Counter extends React.Component{
  constructor(){
    super();
    this.state = {number:store.getState().number};
  }
  componentDidMount(){
    store.subscribe(()=>{
      //改变state之后组件会立即重新渲染
      this.setState({number:store.getState().number});
    })
  }
  render(){
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={()=>store.dispatch({type:actionTypes.ADD})}>+</button>
        <button onClick={()=>store.dispatch({type:actionTypes.SUB})}>-</button>
      </div>
    )
  }
}