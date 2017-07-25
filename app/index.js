import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';
import './index.less'
const IMAGES = [
  {src: require('./images/1.jpg')},
  {src: require('./images/2.jpg')},
  {src: require('./images/3.jpg')}
]
/**
 * 1.自动轮播
 */
ReactDOM.render(<Slider
  images={IMAGES} //图片的数组
  autoPlay={true} //是否启动自动轮播
  delay={1.5} //每隔多少秒轮播一次
  speed={1} //多少时间可以轮播一次
  arrows={true}//是否显示左右箭头导航
  dots={true} //是否点示点状导航
/>,document.querySelector('#root'));
