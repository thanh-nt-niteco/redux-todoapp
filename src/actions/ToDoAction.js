import {v4} from 'uuid';
import { fetchToDos } from '../services/fetchData';
import { getIsFetching } from '../reducers';

export const TODO_ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    RECEIVE_TODOS: 'RECEIVE_TODOS',
    REQUEST_TODOS: 'REQUEST_TODOS'
};

export const AddToDoAction = function(text) {
    return {
        type: TODO_ACTIONS.ADD_TODO,
        id: v4(),
        value: text
    };
}

export const ToggleToDoAction = function(id) {
    return {
        type: TODO_ACTIONS.TOGGLE_TODO,
        id
    }
}

const ReceiveTodos = function(filter, todos) {
    return {
        type: TODO_ACTIONS.RECEIVE_TODOS,
        filter,
        response: todos
    }
}

const requestTodos = (filter) => ({
    type: TODO_ACTIONS.REQUEST_TODOS,
    filter
});

export const fetchTodos = (filter) => (dispatch, getState) => {
    if(getIsFetching(getState(), filter))
        return Promise.resolve();

    dispatch(requestTodos(filter));

    return fetchToDos(filter).then(response => {
        return dispatch(ReceiveTodos(filter, response));
    });
}