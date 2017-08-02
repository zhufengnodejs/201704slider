import * as types from  './action-types';
//actionCreator action的创建者
export default {
  add(){
    return {type:types.ADD};
  },
  sub(){
    return {type:types.SUB};
  }
}