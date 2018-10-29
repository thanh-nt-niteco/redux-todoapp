
import {createStore} from 'redux';
import Reducer from './reducers';
//import {loadState, saveState} from './services/localStorage';
//import throttle from 'lodash/throttle';

const logger = (store) => (next) => {
    if(!console.group) {
        return next;
    }

    return function(action) {
        console.group(action.type);
        console.log('%c previous state', 'color: blue', store.getState());
        console.log('%c action', 'color: red', action);
        const returnValue = next(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    };
}

const promise = (store) => (next) => {
    return (action) => {
        if(typeof action.then === 'function') {
            return action.then(next);
        }

        return next(action);
    }
}

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    });
};

export default function() {
    //const persistedState = loadState();
    //const store = createStore(Reducer, persistedState);
    const store = createStore(Reducer);
    const middlewares = [promise];

    if( process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }
    wrapDispatchWithMiddlewares(store, middlewares);

    // store.subscribe(throttle(() => {
    //     saveState({
    //         todos: store.getState().todos
    //     });
    // }, 1000));

    return store;
}