import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ToDoItem from './ToDoItem';
import {ToggleToDoAction, ReceiveTodos} from '../actions/ToDoAction';
import {getVisualTodos} from '../reducers';
import {FILTERS} from '../actions/FilterVisibilityAction';

import { fetchToDos } from '../services/fetchData';

const mapStateToProps = (state, {match}) => {
  const filter = match.params.filter || FILTERS.SHOW_ALL;

  return {
    todos: getVisualTodos(state, filter),
    filter: filter 
  };
};

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

class VisibleToDoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const {filter, receiveTodos} = this.props;
    fetchToDos(filter).then(todos => {
      receiveTodos(filter, todos);
    })
  }

  render () {
    return (
      <ToDoList {...this.props}/>
    );
  }
}

export default VisibleToDoList = withRouter(connect(
  mapStateToProps, {
  onToggleItem: ToggleToDoAction,
  receiveTodos: ReceiveTodos
})(VisibleToDoList));
