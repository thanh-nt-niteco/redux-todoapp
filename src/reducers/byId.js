import {TODO_ACTIONS} from '../actions/ToDoAction';

const byId = (state = {}, action) => {
    switch (action.type) {
        case TODO_ACTIONS.FETCH_TODOS_SUCCESS:
            const nextState = Object.assign({}, state);
            action.response.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        case TODO_ACTIONS.ADD_TODO:
            const nextState2 = Object.assign({}, state);
            nextState2[action.todo.id] = action.todo;
            return nextState2;
        default:
            return state;
    }
}

export default byId;

export const getTodo = (state, id) => state[id];