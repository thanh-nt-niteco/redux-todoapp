import { combineReducers } from 'redux'

import ToDoReducer, * as toDoReducer from './ToDoReducer';
import FilterVisibility from './FilterVisibilityReducer';

export default combineReducers({
    todos: ToDoReducer,
    filter: FilterVisibility
});

export const getVisualTodos = function(state, filter) {
    return toDoReducer.getVisualTodos(state.todos, filter);
}