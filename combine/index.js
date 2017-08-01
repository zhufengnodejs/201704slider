import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "../learn-redux/components/Counter";
import Todos from "./components/Todos";
ReactDOM.render(
  <div>
    <Counter/>
    <Todos/>
  </div>,
  document.querySelector('#root')
);