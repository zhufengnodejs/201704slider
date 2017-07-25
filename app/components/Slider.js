import React, {Component} from 'react';
import './Slider.less'
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
export default class Slider extends Component {
  constructor() {
    super();
    this.state = {index: 0,isMoving:false};//索引值默认为0
  }

  //表示移动index step步长
  turn = (step) => {
    if(!this.state.isMoving){
      this.setState({isMoving:true});
      //用当前的索引加上步长,得到新的值
      let index = this.state.index + step;
      if (index > this.props.images.length) {
        //先把转换的过渡时间设置为0
        this.sliders.style.transitionDuration = '0s';
        this.sliders.style.left = 0;//直接操作DOM元素，把left置为0
        //调用这个方法会强行刷新DOM
        getComputedStyle(this.sliders, null).left;
        index = 1;
        this.sliders.style.transitionDuration = this.props.speed + 's';
        this.setState({index});
        setTimeout(()=>{
          this.setState({isMoving:false});
        },this.props.speed*1000);
        return;
      } else if (index < 0) {
        //先把转换的过渡时间设置为0
        this.sliders.style.transitionDuration = '0s';
        this.sliders.style.left = this.props.images.length * -300 + 'px';
        getComputedStyle(this.sliders, null).left;
        index = this.props.images.length - 1;
        this.sliders.style.transitionDuration = this.props.speed + 's';
        this.setState({index});
        setTimeout(()=>{
          this.setState({isMoving:false});
        },this.props.speed*1000);
        return;
      }
      this.setState({index});
      setTimeout(()=>{
        this.setState({isMoving:false});
      },this.props.speed*1000);
    }

  }
  //开始自动轮播,鼠标移动上去之后暂停自动轮播。鼠标移走之后开启自动轮播
  go = () => {
    this.timer = setInterval(() => {
      this.turn(1);
    }, this.props.delay * 1000)//每隔2秒钟让index加1
  }

  componentDidMount() {
    if (this.props.autoPlay)
      this.go();
  }

  //把子组件中的SliderItems组件父组件
  setSliders = (ref) => {
    this.sliders = ref;
  }

  stop = () => {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="slider-wrapper"
           onMouseOver={this.stop}
           onMouseOut={this.go}
      >
        <SliderItems
          images={this.props.images}
          index={this.state.index}
          setSliders={this.setSliders}
          speed={this.props.speed}
        />
        <SliderArrows turn = {this.turn}/>
      </div>
    )
  }
}