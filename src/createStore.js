
import {createStore} from 'redux';
import Reducer from './reducers';
//import {loadState, saveState} from './services/localStorage';
//import throttle from 'lodash/throttle';

const addLoggingToDispatch = function(store) {
    const rawDispatch = store.dispatch;
    if(!console.group) {
        return rawDispatch;
    }

    return function(action) {
        console.group(action.type);
        console.log('%c previous state', 'color: blue', store.getState());
        console.log('%c action', 'color: red', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    };
}

export default function() {
    //const persistedState = loadState();
    //const store = createStore(Reducer, persistedState);
    const store = createStore(Reducer);

    store.dispatch = addLoggingToDispatch(store);

    // store.subscribe(throttle(() => {
    //     saveState({
    //         todos: store.getState().todos
    //     });
    // }, 1000));

    return store;
}