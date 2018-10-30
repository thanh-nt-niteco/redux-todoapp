
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import Reducer from './reducers';
//import {loadState, saveState} from './services/localStorage';
//import throttle from 'lodash/throttle';

const thunk = (store) => (next) => (action) => {
    if(typeof action === 'function')
        return action(store.dispatch);
    return next(action);
}

export default function() {
    //const persistedState = loadState();
    //const store = createStore(Reducer, persistedState);
    const middlewares = [thunk];
    if( process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    // store.subscribe(throttle(() => {
    //     saveState({
    //         todos: store.getState().todos
    //     });
    // }, 1000));

    return  createStore(Reducer, applyMiddleware(...middlewares));
}