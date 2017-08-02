import React,{Component} from 'react';
import ColorButtons from "./ColorButtons";
import PropTypes from 'prop-types';
export default class Content extends Component{
  static contextTypes= {
    color:PropTypes.string
  }
  render(){
    return (
      <div style={{color:this.context.color}}>
        Content
        <ColorButtons/>
      </div>
    )
  }
}