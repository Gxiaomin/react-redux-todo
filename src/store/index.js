/*
 * @Author: xiaomin
 * @Date: 2020-02-29 13:14:23
 * @LastEditTime: 2020-02-29 13:28:30
 */

/**
  * applyMiddleware: redux通过该函数来使用中间件
  * createStore: 用于创建Store实例对象
*/ 
import { applyMiddleware, createStore } from 'redux';

/**
* thunk: 中间件
* 作用: 如果不使用该中间件，当dispatch一个action时，需要给dispatch函数传入action对象；
       但如果使用了该中间件，那么就可以传入一个函数，该函数有两个参数dispatc和getState,
       这个dispatch可以在异步请求完成后使用，对于异步action很有用。
 */
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// 引入reducer
import reducers from './reducers.js';

// 创建store实例
let store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
)
 
export default store
 