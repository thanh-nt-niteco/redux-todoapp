import { v4 } from 'uuid';
import { FILTERS } from '../actions/FilterVisibilityAction';

const fakeDatabase = {
    todos: [{
            id: v4(),
            value: 'task 1',
            completed: true,
        },{
            id: v4(),
            value: 'task 2',
            completed: true,
        },{
            id: v4(),
            value: 'task 3',
            completed: false,
        },{
            id: v4(),
            value: 'task 4',
            completed: false,
        },{
            id: v4(),
            value: 'task 5',
            completed: true,
        },
    ]
};

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchToDos = (filter) => {
    return delay(2000).then(() => {
        switch (filter) {
            case FILTERS.SHOW_ALL:
                return fakeDatabase.todos;
            case FILTERS.ACTIVATE:
            return fakeDatabase.todos.filter(t => !t.completed);
            case FILTERS.COMPLETED:
                return fakeDatabase.todos.filter(t => t.completed);
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    });
}