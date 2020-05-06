import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.todo,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateToDo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleClick() {
    this.props.toggleToDo(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className='ToDo' style={{display: this.state.isEditing ? 'block' : 'flex'}} >
          <form className='ToDo-Edit-Form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className='ToDo'>
          <div
            className={
              this.props.completed ? 'completed ToDo-Task' : 'ToDo-Task'
            }
            onClick={this.handleClick}
          >
            {this.props.todo}
          </div>
          <div className='ToDo-Buttons'>
              <button onClick={this.toggleForm}><i className='fas fa-pen' /></button>
              <button onClick={this.props.deleteToDo}><i className='fas fa-trash' /></button>
            </div>
        </div>
      );
    }
    return result;
  }
}

export default ToDo;
