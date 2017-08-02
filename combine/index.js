import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import store from './store';
//这个react-redux库可以帮助我们自动连接
//Provider 提供者,接收一个我们提供的store属性，然后又传递给了它的所有的子组件
import {Provider} from './react-redux';
ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter/>
      <Todos/>
    </div>
  </Provider>,
  document.querySelector('#root')
);