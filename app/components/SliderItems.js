import React,{Component} from 'react';
import SliderItem from "./SliderItem";
export default class SliderItems extends Component{
  //在组件挂载完成后才能真正得到DOM元素
  componentDidMount(){
    //this.refs.sliders等于真实的ul的DOM元素 {sliders:DOM}
    this.props.setSliders(this.refs.sliders);
  }
  render(){
    let style = {//给ul增加自定义样式对象
      width:(this.props.images.length+1)*300+'px',//宽度是300*图片的数量+1
      left:this.props.index*-300+'px',//距离左边
      transitionDuration:'1s'//渐变的时间是1秒
    }

    return (
      <ul ref="sliders" className="sliders" style={style}>
        {
          this.props.images.map((image,index)=>(
            <SliderItem key={index} image={image}/>
          ))
        }
        <SliderItem key={this.props.images.length} image={this.props.images[0]}/>
      </ul>
    )
  }
}