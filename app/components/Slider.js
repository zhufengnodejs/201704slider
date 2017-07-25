import React,{Component} from 'react';
import './Slider.less'
export default class Slider extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="slider-wrapper">
        <ul className="sliders">
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