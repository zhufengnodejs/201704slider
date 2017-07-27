import React, {Component} from 'react';
import utils from  '../utils';
//开闭原则 对扩展开放，对修改关闭
//里氏代换原则 一个接口可以有多个实现，多个实现之间是可以替换掉
export default class UserAdd extends Component {
  handleSubmit = ()=>{
    let username = this.refs.username.value;//取得用户名的值
    let email = this.refs.email.value;//取得邮箱的值
    //数据库 localStorage 文件里 cookie 远程ajax接口里
    utils.saveUser({username,email});
    //保存成功之后跳到用户列表页
    this.props.history.push('/user/list');
  }

  /**
   * history 历史,可以操作读取和写入历史
   * location.pathname可以获取当前路径
   * match 如果Route中的path属性和当前浏览器中的url相匹配的话就有值，否则 就是null.
   *    isExact:true 是否精确匹配
   *    path url 路径名
   *    params 路径参数 express vue
   */
  render() {
    console.log('user add ',this.props);//property 属性对象
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="control-label">用户名</label>
          <input ref="username" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label className="control-label">邮箱</label>
          <input ref="email" type="email" className="form-control"/>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary"/>
        </div>
      </form>
    )
  }
}