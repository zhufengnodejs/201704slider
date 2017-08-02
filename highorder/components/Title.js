import React,{Component} from 'react';
import PropTypes from 'prop-types';
//如果父组件里定义了上下文对象，那么在子组件里可以通过 this.context拿到上下文对象
export default class Title extends Component{
  //规定了接收父组件上下文对象，只有指定了这个，才能拿到 this.context
  static contextTypes= {
    color:PropTypes.string
  }
  render(){
    return (
      <div style={{color:this.context.color}}>
        Title
      </div>
    )
  }
}