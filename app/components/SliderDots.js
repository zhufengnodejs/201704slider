import React,{Component} from 'react';
import './SliderDots.less'
export default class SliderDots extends Component{
  render(){
    return (
      <div className="slider-dots">
        {
          this.props.images.map((image,index)=>(
            <span className="dot" key={index}></span>
          ))
        }
      </div>
    )
  }
}