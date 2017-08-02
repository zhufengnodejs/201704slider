import React from 'react';
import {connect} from 'react-redux';
import * as types from '../action-types';
class Todos extends React.Component {
  handleKeyDown = (event) => {
    let keyCode = event.keyCode;
    if (keyCode == 13) {//如果是回车键的话
      let text = event.target.value;//先拿到事件源的值
      //向仓库里派发一个action,要求增加一个todo
      this.props.addTodo(text);
      event.target.value = '';
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyDown={this.handleKeyDown}/>
        <ul>
          {
            this.props.list.map((item, index) => (
              <li key={index}>
                {item}
                <button>-</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
//返回值会变成当前组件实例的属性对象
let mapStateToProps = state => ({
  list:state.todos.list
})
//把store的dispatch方法映射为UI组件的属性
let mapDispatchToProps = dispatch =>(
  {
    //调用addTodo的时候，会向store派发一个ADD_TODO的action
    addTodo:(text)=>dispatch({type:types.ADD_TODO,text}),
    delTodo:index=>dispatch({type:types.DELETE_TODO,index})
  }
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)