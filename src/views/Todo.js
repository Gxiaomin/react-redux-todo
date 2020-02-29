/*
 * @Author: xiaomin
 * @Date: 2020-02-28 19:22:51
 * @LastEditTime: 2020-02-29 21:05:19
 */
import React, { Component } from 'react';
import '../assets/stylesheet/todo.scss';
import TodoItem from './TodoItem';
// 将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux';
// 引入actions
import { setTodosArr } from '../store/actions';

var id = 0;
class Todo extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      // todos: [],
      inputVal: ''
    }
  }

  // 输入
  changeToInput (e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  // 添加todo
  addTodo () {
    let { setTodosArr, allTodos } = this.props;
    if (this.state.inputVal === '') return;

    let newTodo = [{
      id: id++,
      content: this.state.inputVal.trim(),
      completed: false
    }]
    
    this.setState({
      inputVal: ''
    })
    // console.log(newTodo.concat(allTodos))
    setTodosArr(newTodo.concat(allTodos))
  }

  // 改变todo状态
  onCompletedItem (id) {
    let copyTodos = this.props.allTodos;
    
    copyTodos.forEach((item, index) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    })
    // console.log(copyTodos)

    this.props.setTodosArr(copyTodos)
  }

  // 删除todo 
  onDeleteItem (id) {
    let allTodos = this.props.allTodos;
    allTodos.splice(allTodos.findIndex(todo => todo.id === id), 1);

    this.props.setTodosArr(allTodos)
  }

  render() {
    let { allTodos } = this.props;
    
    return (
      <section className="todo-wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            className="add-input"
            placeholder="添加事件清单吧~"
            value={ this.state.inputVal }
            onChange={(e) => this.changeToInput(e)}
          />
          <button className="add-btn" type="button" onClick={this.addTodo.bind(this)}>添加</button>
        </div>
        <div className="todo-body">
          <TodoItem 
            todos={ allTodos } 
            completedItem={ this.onCompletedItem.bind(this) }
            deleteItem={ this.onDeleteItem.bind(this) }
          ></TodoItem>
        </div>
      </section>
    );
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    allTodos: state.allTodos
  }
}
 
// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = dispatch => {
  return {
    setTodosArr (data) {
      dispatch(setTodosArr(data))
      // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_TODOS_ARR', data: data })
        )*/
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
