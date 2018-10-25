import {v4} from 'uuid';

export const TODO_ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO'
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