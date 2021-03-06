import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ToDoItem from './ToDoItem';
import {ToggleToDoAction, fetchTodos} from '../actions/ToDoAction';
import {getVisualTodos, getIsFetching, getErrorMessage} from '../reducers';
import {FILTERS} from '../actions/FilterVisibilityAction';
import ErrorMessage from './ErrorMessage';

const mapStateToProps = (state, {match}) => {
  const filter = match.params.filter || FILTERS.SHOW_ALL;

  return {
    todos: getVisualTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
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
    const {filter, fetchTodos} = this.props;
    fetchTodos(filter);
  }

  render () {
    const {onToggleItem, todos, isFetching, errorMessage} = this.props;

    if(errorMessage && !todos.length) {
      return (
        <ErrorMessage message={errorMessage} onRetry={() => this.fetchData()} />
      );
    }

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
  fetchTodos
})(VisibleToDoList));
