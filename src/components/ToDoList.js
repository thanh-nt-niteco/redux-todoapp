import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ToDoItem from './ToDoItem';
import {ToggleToDoAction, fetchTodos, requestTodos} from '../actions/ToDoAction';
import {getVisualTodos, getIsFetching} from '../reducers';
import {FILTERS} from '../actions/FilterVisibilityAction';

const mapStateToProps = (state, {match}) => {
  const filter = match.params.filter || FILTERS.SHOW_ALL;

  return {
    todos: getVisualTodos(state, filter),
    isFetching: getIsFetching(state, filter),
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
    const {filter, fetchTodos, requestTodos} = this.props;
    requestTodos(filter);
    fetchTodos(filter);
  }

  render () {
    const {onToggleItem, todos, isFetching} = this.props;
    if(isFetching && !todos.length) {
      return (
        <p>Loading...</p>
      );
    }
    return (
      <ToDoList
        onToggleItem = {onToggleItem}
        todos = {todos}
      />
    );
  }
}

export default VisibleToDoList = withRouter(connect(
  mapStateToProps, {
  onToggleItem: ToggleToDoAction,
  fetchTodos,
  requestTodos
})(VisibleToDoList));
