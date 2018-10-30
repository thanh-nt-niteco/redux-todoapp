import {TODO_ACTIONS} from '../actions/ToDoAction';

const byId = (state = {}, action) => {
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

export default byId;

export const getTodo = (state, id) => state[id];