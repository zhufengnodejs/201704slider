import React,{Component} from 'react';
import utils from '../utils';
export default class UserDetail extends Component{
  constructor(){
    super();
    this.state = {user:{}};
  }
  componentWillMount(){
    let id = this.props.match.params.id;//先得到路径参数中的ID值
    let users = utils.readUsers();//读取老的用户数组
    let user = users.find(item =>item.id == id);//查找到数组中那个跟当前路径中的ID相同ID的用户对象
    this.setState({user});//修改状态对象
  }
  handleClick = ()=>{
    utils.delUser(this.state.user.id);//先在localStorage里删除此用户
    this.props.history.push('/user/list');
  }
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <button onClick={()=>this.props.history.goBack()} className="btn btn-primary">返回</button>
        </div>
        <div className="panel-body">
          ID:{this.state.users.id}<br/>
          用户名:{this.state.user.username}<br/>
          邮箱:{this.state.user.email}<br/>
        </div>
        <div className="panel-footer">
          <button onClick={this.handleClick} className="btn btn-danger">删除</button>
        </div>
      </div>
    )
  }
}