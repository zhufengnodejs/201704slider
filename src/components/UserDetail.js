import React,{Component} from 'react';
import utils from '../utils';
export default class UserDetail extends Component{
  constructor(){
    super();
    this.state = {user:{}};
  }
  componentWillMount(){
    let id = this.props.match.params.id;

  }
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <button onClick={()=>this.props.history.goBack()} className="btn btn-primary">返回</button>
        </div>
        <div className="panel-body">
          ID:<br/>
          用户名:<br/>
          邮箱:<br/>
        </div>
        <div className="panel-footer">
          <button className="btn btn-danger">删除</button>
        </div>
      </div>
    )
  }
}