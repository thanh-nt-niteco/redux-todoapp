
export const TODO_ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO'
};

let toDoID = 0;
export const AddToDoAction = function(text) {
    return {
        type: TODO_ACTIONS.ADD_TODO,
        id: toDoID++,
        value: text
    };
}

export const ToggleToDoAction = function(id) {
    return {
        type: TODO_ACTIONS.TOGGLE_TODO,
        id
    }
}