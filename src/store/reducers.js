/*
 * @Author: xiaomin
 * @Date: 2020-02-29 13:15:12
 * @LastEditTime: 2020-02-29 21:02:53
 */

import defaultState from './state';

function changeTodosArr (state = defaultState, action) {
  // 不同的action,有不同的处理方法
  switch (action.type) {
    case 'SET_TODOS_ARR': 
      return Object.assign({}, defaultState, {
        allTodos: [].concat(action.data)
      });
      // return action.data;
    default:
      return state;
  }
}

// 导出所有reducer
export default changeTodosArr;
 