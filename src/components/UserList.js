import React, {Component} from 'react';
import utils from '../utils';
export default class UserList extends Component {
  constructor() {
    super();
    //定义一个初始的状态对象
    this.state  = {users:[]};
  }
  componentDidMount() {//组件加载完成
   let users = utils.readUsers();//从localStorage中读取用户数组
   this.setState({users});//设置用户数组为新的状态
  }
  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>用户名</th>
            <th>邮箱</th>
          </tr>
        </thead>
        <tbody>
        {
          this.state.users.map((user,index)=>(
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    )
  }
}