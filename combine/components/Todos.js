import React from 'react';
import store from '../store';
export default class Todos extends React.Component{
  constructor(){
    super();
    this.state = {list:store.getState().todos.list};
  }
  render(){
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
          {
            this.state.list.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}