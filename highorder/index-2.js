import React from 'react';
import ReactDOM from 'react-dom';
//老组件
let Post = (props) => (
  <div>
    <p>{props.content}</p>
    <button onClick={props.refresh}>刷新</button>
  </div>
)
function getData(url) {
  //获取URL地址中的内容，返回一个promise对象.then
  return fetch(url).then((res) => res.json());
}
//接收URL地址作为参数
let loadAndRefresh = url => OldComponent => {
  class NewComponent extends React.Component {
    constructor() {
      super();//定义一个默认状态
      this.state = {content: '数据加载中...'};
    }//读取远程URL接口，拿到响应的数据，修改state
    componentDidMount() {
      this.refresh();//组件第一次加载的时候调用refresh方法
    }

    refresh = () => {
      this.setState({content: '数据加载中...'});
      getData(url).then(data => this.setState({
        content: data.time
      }));
    }

    render() {
      return <OldComponent {...this.props} refresh={this.refresh} content={this.state.content}/>
    }
  }
  return NewComponent;
}

let NewPost = loadAndRefresh('http://localhost:3000/clock1')(Post);
let NewPost2 = loadAndRefresh('http://localhost:3000/clock2')(Post);
ReactDOM.render(<NewPost name="zfpx"/>, document.querySelector('#root'));