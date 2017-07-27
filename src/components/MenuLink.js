import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
export default ({to,label,exact}) => (
  //不管路由是否能匹配上，children里的函数组件都能显示
  // 路由的path 浏览器地址栏url
  //this.props 是一个对象，里面有三个属性history match location
  <Route exact={exact} path={to} children={
    ({match}) => (
      <li className={match?'active':''}><Link to={to}>{label}</Link></li>
    )
  }/>
)