
import {createStore} from 'redux';
import Reducer from './reducers';

export default function() {
    return createStore(Reducer);
}