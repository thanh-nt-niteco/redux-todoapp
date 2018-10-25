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


export default function(state = [], action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return [
                ...state,
                addToDo(null, action)
            ];
        case TODO_ACTIONS.TOGGLE_TODO:
            return state.map(item => addToDo(item, action));
        default:
            return state;
    }
}