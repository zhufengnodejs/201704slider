/**
 * 高阶组件 是一个函数，传进去一个组件，返回一个新组件
 */
import React from 'react';
import ReactDOM from 'react-dom';
let ToPanel = (OldComponent,Old2Component)=>{
 class Panel extends React.Component{
    render(){
      return (
        <div style={{border:'1px solid red'}}>
          <OldComponent/>
          <Old2Component/>
        </div>
      )
    }
 }
 return Panel;
}
let Hello = ()=><h1>Hello</h1>;
let Hello2 = ()=><h1>Hello</h1>;
let NewPanel = ToPanel(Hello);
let NewPanel2 = ToPanel(Hello2);
ReactDOM.render(<NewPanel2 name="zfpx"/>,document.querySelector('#root'));