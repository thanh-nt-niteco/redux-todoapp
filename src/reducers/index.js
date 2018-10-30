import { combineReducers } from 'redux';
import {FILTERS} from '../actions/FilterVisibilityAction';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
    [FILTERS.SHOW_ALL]: createList(FILTERS.SHOW_ALL),
    [FILTERS.ACTIVATE]: createList(FILTERS.ACTIVATE),
    [FILTERS.COMPLETED]: createList(FILTERS.COMPLETED)
});

export default combineReducers({
    byId,
    listByFilter
});

export const getVisualTodos = function(state, filter) {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
}

export const getIsFetching = function(state, filter) {
    return fromList.getIsFetching(state.listByFilter[filter]);
}

export const getErrorMessage = function(state, filter) {
    return fromList.getErrorMessage(state.listByFilter[filter]);
}