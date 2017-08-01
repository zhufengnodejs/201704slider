import {createStore,combineReducers} from 'redux';
//从reducers文件夹中得到index.js文件
import reducer from './reducers/index';
let store = createStore(reducer);