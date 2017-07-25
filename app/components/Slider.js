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
          <li className="slider">
            <img src="" alt=""/>
          </li>
        </ul>
      </div>
    )
  }
}