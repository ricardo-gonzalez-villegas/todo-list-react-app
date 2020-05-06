import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewToDoForm.css'

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newToDo = { ...this.state, id: uuidv4(), completed: false };
    this.props.createToDo(newToDo);
    this.setState({
      todo: '',
    });
  }

  render() {
    return (
      <form className='ToDo-Form' onSubmit={this.handleSubmit}>
          <br />
          <input
            name='todo'
            type='text'
            id='todo'
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder='New To-Do'
          />
        <button>Add</button>
      </form>
    );
  }
}

export default NewToDoForm;
