
import {createStore} from 'redux';
import Reducer from './reducers';

import {loadState, saveState} from './services/localStorage';

const persistedState = loadState();
const store = createStore(Reducer, persistedState);

store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    });
});

export default function() {
    return store;
}