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
    return delay(500).then(() => {
        if(Math.random() > 0.75) {
            throw new Error("Boom !");
        }

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

export const addToDo = (text) => {
    return delay(500).then(() => {
        const todo = {
            id: v4(),
            value: text,
            completed: false
        };

        fakeDatabase.todos.push(todo);

        return todo;
    });
}

export const toggleTodo = (id) => {
    return delay(500).then(() => {
        for(let i=0; i<fakeDatabase.todos.length; i++) {
            if(fakeDatabase.todos[i].id === id) {
                fakeDatabase.todos[i].completed = !fakeDatabase.todos[i].completed;
                return fakeDatabase.todos[i];
            }
        }
    });
}