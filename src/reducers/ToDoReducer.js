import { combineReducers } from 'redux';
import {TODO_ACTIONS} from '../actions/ToDoAction';
import {FILTERS} from '../actions/FilterVisibilityAction';

function addToDo(state, action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return {
                id: action.id,
                value: action.value,
                completed: false
            };
        case TODO_ACTIONS.TOGGLE_TODO:
            if(state.id == action.id)
                return {
                    id: state.id,
                    value: state.value,
                    completed: !state.completed
                };
            else return state;
        default:
            return state;
    }
}

const byIds = (state = {}, action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
        case TODO_ACTIONS.TOGGLE_TODO:
            return Object.assign({}, state, {
                [action.id]: addToDo(state[action.id], action)
            });
        default:
            return state;
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return [...state, action.id];
        default:
            return state;
    }
}

const getAllTodos = (state) => {
    return state.allIds.map(id => state.byIds[id]);
}

export default combineReducers({
    byIds,
    allIds
});

export const getVisualTodos = function(state, filter) {
    const allTodos = getAllTodos(state);
    switch(filter) {
      case FILTERS.SHOW_ALL:
        return allTodos;
      case FILTERS.ACTIVATE:
        return allTodos.filter(todo => !todo.completed);
      case FILTERS.COMPLETED:
        return allTodos.filter(todo => todo.completed);
      default: 
        return allTodos;
    }
}