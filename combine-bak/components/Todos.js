import React from 'react';
import store from '../store';
import * as types from '../action-types';
export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {list: store.getState().todos.list};
  }

  componentDidMount() {
    //让当前组件订阅状态变化事件，当状态发生改变的时候执行对应的回调函数
    store.subscribe(() => {
      this.setState({list: store.getState().todos.list});
    })
  }

  handleKeyDown = (event) => {
    let keyCode = event.keyCode;
    if (keyCode == 13) {//如果是回车键的话
      let text = event.target.value;//先拿到事件源的值
      //向仓库里派发一个action,要求增加一个todo
      store.dispatch({type: types.ADD_TODO, text});
      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
          {
            this.state.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}