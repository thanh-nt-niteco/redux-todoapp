import {v4} from 'uuid';
import { fetchToDos } from '../services/fetchData';

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

export const fetchTodos = function(filter) {
    return fetchToDos(filter).then(response => {
        return ReceiveTodos(filter, response);
    });
}

export const requestTodos = (filter) => ({
    type: TODO_ACTIONS.REQUEST_TODOS,
    filter
});