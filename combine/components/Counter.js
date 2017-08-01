import React from 'react';
import store from '../store';
export default class Counter extends React.Component{
  render(){
    return (
      <div>
        <p>{store.getState().counter.number}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}