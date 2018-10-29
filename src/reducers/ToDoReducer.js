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
        case TODO_ACTIONS.RECEIVE_TODOS:
            const nextState = Object.assign({}, state);
            action.response.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        default:
            return state;
    }
}

const allIds = (state = [], action) => {
    if(action.filter != FILTERS.SHOW_ALL)
        return state;

    switch (action.type) {
        case TODO_ACTIONS.RECEIVE_TODOS:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
}

const activeIds = (state = [], action) => {
    if(action.filter != FILTERS.ACTIVATE)
        return state;
        
    switch (action.type) {
        case TODO_ACTIONS.RECEIVE_TODOS:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
}

const completedIds = (state = [], action) => {
    if(action.filter != FILTERS.COMPLETED)
        return state;
        
    switch (action.type) {
        case TODO_ACTIONS.RECEIVE_TODOS:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
}

const idsByFilter = combineReducers({
    [FILTERS.SHOW_ALL]: allIds,
    [FILTERS.ACTIVATE]: activeIds,
    [FILTERS.COMPLETED]: completedIds
});

export default combineReducers({
    byIds,
    idsByFilter
});

export const getVisualTodos = function(state, filter) {
    const ids = state.idsByFilter[filter];
    return ids.map(id => state.byIds[id]);
}