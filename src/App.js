/*
 * @Author: xiaomin
 * @Date: 2020-02-28 19:07:56
 * @LastEditTime: 2020-02-29 13:30:20
 */
import React from 'react';
import './assets/stylesheet/app.scss';
import Todo from './views/Todo';

/**
 * Provider是react-redux的核心工具之一 
 * 作用：将store传递进每个组件中
 */
import { Provider } from 'react-redux';
// 引入创建好的store实例
import store from './store/index';

function App() {
  return (
    <div className="App">
      {/* 将store作为props传入，即可以在所有组件中使用store */}
      <Provider store={store}>
        <header>React-redux Todolist</header>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;
