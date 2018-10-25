import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddToDoAction } from '../actions/ToDoAction';

class AddToDo extends Component {
  constructor(props) {
    super(props);

  }

  addToDo(value) {
    const {dispatch} = this.props;
    if(value.length > 0) {
      dispatch(AddToDoAction(this.input.value));
      this.input.value = "";
    }
  }

  render() {
    return (
      <div>
          <input ref={node => this.input = node}/>
          <button onClick={() => this.addToDo(this.input.value)}>Add</button>
      </div>
    );
  }
}

export default connect()(AddToDo);
