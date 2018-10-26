import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ToDoItem from './ToDoItem';
import {ToggleToDoAction} from '../actions/ToDoAction';
import {getVisualTodos} from '../reducers';
import {FILTERS} from '../actions/FilterVisibilityAction';

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

export default withRouter(connect((state, {match}) => {
  return {
    todos: getVisualTodos(state, match.params.filter || FILTERS.SHOW_ALL)
  };
}, {
  onToggleItem: ToggleToDoAction
})(ToDoList));
