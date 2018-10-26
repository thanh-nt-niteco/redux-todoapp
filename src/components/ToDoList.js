import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';
import {ToggleToDoAction} from '../actions/ToDoAction';
import {FILTERS} from '../actions/FilterVisibilityAction';

const getVisualTodos = function(todos, filter) {
  switch(filter) {
    case FILTERS.SHOW_ALL:
      return todos;
    case FILTERS.ACTIVATE:
      return todos.filter(todo => !todo.completed);
    case FILTERS.COMPLETED:
    return todos.filter(todo => todo.completed);
    default: 
      return todos;
  }
}

class ToDoList extends Component {
  render() {
    const {todos, onToggleItem} = this.props;

    return (
      <ul>
          {
            todos.map(item => <ToDoItem todo={item} key={item.id} onToggleItem={onToggleItem} />)
          }
      </ul>
    );
  }
}

export default connect((state, ownProps) => {
  return {
    todos: getVisualTodos(state.todos, ownProps.filter)
  };
}, {
  onToggleItem: ToggleToDoAction
})(ToDoList);
