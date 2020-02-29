/*
 * @Author: xiaomin
 * @Date: 2020-02-28 19:07:56
 * @LastEditTime: 2020-02-29 13:11:19
 */
import React from 'react';
import './assets/stylesheet/app.scss';
import Todo from './views/Todo';

function App() {
  return (
    <div className="App">
      <header>React-redux Todolist</header>
      <Todo></Todo>
    </div>
  );
}

export default App;
