/*
 * @Author: xiaomin
 * @Date: 2020-02-29 13:18:07
 * @LastEditTime: 2020-02-29 13:36:54
 */

// 设置所有待办事项
export function setTodosArr (data) {
  return {
    type: 'SET_TODOS_ARR',
    data: data
  }
}
