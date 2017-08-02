import React, {Component} from 'react';
import Title from "./Title";
import Content from "./Content";
import PropTypes from 'prop-types';
//如何使用context
//1.在要顶层组件里定义上下文对象
export default class App extends Component {
  constructor() {
    super();
    this.state = {color:'red'};
  }
  //改变颜色
  switchColor = (color)=>{
    console.log(color);
    this.setState({color});
  }
  //定义一个类的静态属性 子组件上下文对象的属性名和类型
  //key "color" is not defined in childContextTypes.
  static childContextTypes = {
    color: PropTypes.string,
    age: PropTypes.number,
    switchColor:PropTypes.func
  }
  //返回子组件的上下文件对象
  getChildContext() {
    console.log(PropTypes);
    return {color: this.state.color, age: 8,switchColor:this.switchColor};
  }

  render() {
    return (
      <div style={{color:this.state.color}}>
        App
        <Title/>
        <Content/>
      </div>
    )
  }
}