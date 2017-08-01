/**
 * 1.创建一个Counter组件并导出
 * 2.在index.js里导入Counter组件并渲染到页面中
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";

ReactDOM.render(<Counter/>,document.querySelector('#root'));
