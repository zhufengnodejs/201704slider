import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
// http://www.baidu.com#/app
//#一般用来代表的是锚点，指向页面中的某个位置
import {
  HashRouter as Router, Route, Link, Switch
} from 'react-router-dom';
import User from "./User";
import Profile from "./Profile";
import Home from "./Home";
import MenuLink from './MenuLink';
let News = props => <h1>func:{props.match.params.content}</h1>;
//props history location match 这三个属性是路由给的，如果此组件不是路由渲染出来的，是没有这三个属性的
export default class App extends Component {
  render() {
    //exact表示严格匹配，而非默认的只匹配前缀
    //switch匹配到一个路径后就不再匹配后续的路径
    return (  //react元素用来指明此组件是如何渲染的 Router只能有一个子元素
      <Router>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-brand">用户管理系统</div>
              </div>
              <ul className="nav navbar-nav">
                <MenuLink exact={true} to="/" label="首页"/>
                <MenuLink exact={true} to="/user" label="用户管理"/>
                <MenuLink exact={true} to="/profile" label="个人设置"/>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/user" component={User}/>
                  <Route path="/profile" component={Profile}/>
                  <Route
                    path="/news/:content"
                    render={
                      props => <h1>render:{props.match.params.content}</h1>
                    }
                    component={News}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}