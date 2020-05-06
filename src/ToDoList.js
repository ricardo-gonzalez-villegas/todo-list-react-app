import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm';
import ToDo from './ToDo';
import './ToDoList.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{todo: 'Task 1', id: 1, completed: false}, {todo: 'Task 2', id: 2, completed: true}],
      editing: false,
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  create(newToDo) {
    this.setState({
      todos: [...this.state.todos, newToDo],
    });
  }

  delete(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  update(id, updatedToDo) {
    const updatedToDos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todo: updatedToDo };
      }
      return todo;
    });
    this.setState({
      todos: updatedToDos,
    });
  }

  toggleComplete(id) {
    const updatedToDos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      todos: updatedToDos,
    });
  }

  render() {
    const todoes = this.state.todos.map((todo) => (
      <ToDo
        todo={todo.todo}
        id={todo.id}
        key={todo.id}
        deleteToDo={() => this.delete(todo.id)}
        updateToDo={this.update}
        completed={todo.completed}
        toggleToDo={this.toggleComplete}
      />
    ));
    return (
      <div className='ToDoList'>
        <h1>To-Do List</h1>
        {todoes}
        <NewToDoForm createToDo={this.create} />
      </div>
    );
  }
}

export default ToDoList;
