import React,{Component} from 'react';
import PropTypes from 'prop-types';
export default class ColorButtons extends Component{
  static contextTypes= {
    color:PropTypes.string,
    switchColor:PropTypes.func
  }
  render(){
    return (
      <div style={{color:this.context.color}}>
        ColorButtons
        <button onClick={()=>this.context.switchColor('red')} style={{color:'red'}}>变红</button>
        <button onClick={()=>this.context.switchColor('green')}  style={{color:'green'}}>变绿</button>
      </div>
    )
  }
}