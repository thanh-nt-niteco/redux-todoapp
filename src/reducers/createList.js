import {TODO_ACTIONS} from '../actions/ToDoAction';

const createList = (filter) => (state = [], action) => {
    if(action.filter != filter)
        return state;

    switch (action.type) {
        case TODO_ACTIONS.RECEIVE_TODOS:
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

export default createList;

export const getIds = (state) => state;