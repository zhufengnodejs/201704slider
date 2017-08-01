/**
 * ActionCreator 动作的创建者,就是用来创建Action的函数
 */
import * as actionTypes from './action-types';
//默认导出一个对象
export default {
  //每个方法返回一个动作 action
  //可以隐藏实现
  add(){
    return {type:actionTypes.ADD};
  },
  sub(){
    return {type:actionTypes.SUB};
  }
}
