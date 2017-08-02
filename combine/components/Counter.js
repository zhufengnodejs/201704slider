import React from 'react';
import store from '../store';
import * as types from '../action-types';
//connect是用来连接组件和store
import {connect} from '../react-redux';
//UI组件 木偶组件 傻瓜组件 让干啥干啥，没有自己的主见
//容器组件 智能组件 聪明组件 有自己的状态和行为
class Counter extends React.Component{
  render(){
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add} >+</button>
        <button onClick={this.props.sub}>-</button>
      </div>
    )
  }
}
//把仓库中的状态对象映射为组件的属性对象
//store.getState() 输入 读状态
let mapStateToProps = state => ({
  number:state.counter.number
})//这个对象会成为当前组件的一个属性对象  this.props
//把dispatch方法映射为属性对象 输出 派发action
let mapDispatchToProps = dispatch => (
  {
    add:()=>dispatch({type:types.ADD}),
    sub:()=>dispatch({type:types.SUB})
  }
)
export default connect(
  mapStateToProps,mapDispatchToProps
)(Counter);