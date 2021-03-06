import { combineReducers } from 'redux';

import {TODO_ACTIONS} from '../actions/ToDoAction';
import {FILTERS} from '../actions/FilterVisibilityAction';

const createList = (filter) => {
    const handleToggle = (state, action) => {
        const {result: toggleId, entities} = action.response;
        const {completed} = entities.todos[toggleId];
        const shouldRemove = (completed && filter === FILTERS.ACTIVATE) || (!completed && filter === FILTERS.COMPLETED);
        return shouldRemove ? state.filter(id => id !== toggleId) : state;
    }

    const ids = (state = [], action) => {
        switch (action.type) {
            case TODO_ACTIONS.FETCH_TODOS_SUCCESS:
                return filter === action.filter ? action.response.result : state;
            case TODO_ACTIONS.ADD_TODO:
                return  filter !== FILTERS.COMPLETED ? [...state, action.response.result] : state;
            case TODO_ACTIONS.TOGGLE_TODO:
                handleToggle(state, action);
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        if(action.filter != filter)
            return state;

        switch(action.type) {
            case TODO_ACTIONS.FETCH_TODOS_REQUEST:
                return true;
            case TODO_ACTIONS.FETCH_TODOS_FAIL:
            case TODO_ACTIONS.FETCH_TODOS_SUCCESS:
                return false
            default:
                return state;
        }
    }

    const errorMessage = (state = null, action) => {
        if(action.filter != filter)
            return state;

        switch(action.type) {
            case TODO_ACTIONS.FETCH_TODOS_FAIL:
                return action.message;
            case TODO_ACTIONS.FETCH_TODOS_REQUEST:
            case TODO_ACTIONS.FETCH_TODOS_SUCCESS:
                return null;
            default:
                return state;
        }
    }

    return combineReducers({
        ids, isFetching, errorMessage
    });
}

export default createList;

export const getIds = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;

export const getErrorMessage = (state) => state.errorMessage;