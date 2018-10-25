import { combineReducers } from 'redux'

import ToDoReducer from './ToDoReducer';
import FilterVisibility from './FilterVisibilityReducer';

export default combineReducers({
    todos: ToDoReducer,
    filter: FilterVisibility
});