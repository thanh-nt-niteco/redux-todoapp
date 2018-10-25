
import {createStore} from 'redux';
import Reducer from './reducers';
import {loadState, saveState} from './services/localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(Reducer, persistedState);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));

export default function() {
    return store;
}