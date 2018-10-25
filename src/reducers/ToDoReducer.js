import {TODO_ACTIONS} from '../actions/ToDoAction';

function addToDo(state, action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return {
                id: action.id,
                value: action.value,
                completed: false
            };
        case TODO_ACTIONS.TOGGLE_TODO:
            return {
                id: state.id,
                value: state.value,
                completed: !state.completed
            }
        default:
            return state;
    }
}


export default function(state = [], action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return [
                ...state,
                addToDo(null, action)
            ];
        case TODO_ACTIONS.TOGGLE_TODO:
            return state.map(item => {
                if(item.id == action.id)
                    return addToDo(item, action);
                return item;
            });
        default:
            return state;
    }
}