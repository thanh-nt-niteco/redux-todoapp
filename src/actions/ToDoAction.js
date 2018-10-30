import { fetchToDos, addToDo } from '../services/fetchData';
import { getIsFetching } from '../reducers';

export const TODO_ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    FETCH_TODOS_REQUEST: 'FETCH_TODOS_REQUEST',
    FETCH_TODOS_SUCCESS: 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_FAIL: 'FETCH_TODOS_FAIL',
};

export const AddToDoAction = (text) => (dispatch) => {
    addToDo(text).then(todo => {
        return dispatch({
            type: TODO_ACTIONS.ADD_TODO,
            todo
        });
    });
}

export const ToggleToDoAction = function(id) {
    return {
        type: TODO_ACTIONS.TOGGLE_TODO,
        id
    }
}

const requestTodos = (filter) => ({
    type: TODO_ACTIONS.FETCH_TODOS_REQUEST,
    filter
});

const fetchTodosSuccess = function(filter, todos) {
    return {
        type: TODO_ACTIONS.FETCH_TODOS_SUCCESS,
        filter,
        response: todos
    }
}

const requestTodosFail = (filter, message) => {
    return {
        type: TODO_ACTIONS.FETCH_TODOS_FAIL,
        filter,
        message
    }
}

export const fetchTodos = (filter) => (dispatch, getState) => {
    if(getIsFetching(getState(), filter))
        return Promise.resolve();

    dispatch(requestTodos(filter));

    return fetchToDos(filter).then(response => {
        return dispatch(fetchTodosSuccess(filter, response));
    }, error => {
        return dispatch(requestTodosFail(filter, error.message || 'Something went wrong!'));
    });
}