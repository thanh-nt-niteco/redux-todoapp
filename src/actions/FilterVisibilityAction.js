
export const FILTER_ACTION = "FILTER_VISIBILITY";

export const FILTERS = {
    SHOW_ALL: 'SHOW_ALL',
    ACTIVATE: 'ACTIVATE',
    COMPLETED: 'COMPLETED'
};


export const FilterVisibility = function(filter) {
    return {
        type: FILTER_ACTION,
        filter
    }
}