import React,{Component} from 'react';
import './Slider.less'
export default class Slider extends Component{
  constructor(){
    super();
    this.state = {index:0};//索引值默认为0
  }
  //表示移动index step步长
  turn = (step)=>{
    //用当前的索引加上步长,得到新的值
    let index = this.state.index + step;
    if(index>=this.props.images.length){
      index = 0;
    }
    this.setState({index});
  }
  //开始自动轮播,鼠标移动上去之后暂停自动轮播。鼠标移走之后开启自动轮播
  go = ()=>{
    this.timer = setInterval(()=>{
      this.turn(1);
    },2000)//每隔2秒钟让index加1
  }
  componentDidMount(){
    this.go();
  }
  render(){
    let style = {//给ul增加自定义样式对象
      width:this.props.images.length*300,//宽度是300*图片的数量
      left:this.state.index*-300+'px',//距离左边
      transitionDuration:'1s'//渐变的时间是1秒
    }
    return (
      <div className="slider-wrapper"
           onMouseOver={()=>clearInterval(this.timer)}
           onMouseOut={()=>this.go()}
      >
        <ul className="sliders" style={style}>
          {
            this.props.images.map((image,index)=>(
              <li className="slider" key={index}>
                <img src={image.src}/>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}