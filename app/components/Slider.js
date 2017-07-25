import React,{Component} from 'react';
import './Slider.less'
import SliderItems from "./SliderItems";
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
  stop=()=>{
    clearInterval(this.timer);
  }
  render(){
    return (
      <div className="slider-wrapper"
           onMouseOver={this.stop}
           onMouseOut={this.go}
      >
      <SliderItems
        images={this.props.images}
        index={this.state.index}
      />
      </div>
    )
  }
}