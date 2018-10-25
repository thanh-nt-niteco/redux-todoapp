import {FILTER_ACTION, FILTERS} from '../actions/FilterVisibilityAction';

export default function(state = FILTERS.SHOW_ALL, action) {
    switch (action.type) {
        case FILTER_ACTION:
            return action.filter;
        default:
            return state;
    }
}