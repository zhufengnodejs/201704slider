/**
 * 1.创建一个Counter组件并导出
 * 2.在index.js里导入Counter组件并渲染到页面中
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
function killMySelf(){
  //在某个DOM节点上卸载组件
  ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
}
ReactDOM.render(<div><Counter/><Counter2/></div>,document.querySelector('#root'));
