
export const FILTER_ACTION = "FILTER_VISIBILITY";

export const FILTERS = {
    SHOW_ALL: 'all',
    ACTIVATE: 'active',
    COMPLETED: 'completed'
};


export const FilterVisibility = function(filter) {
    return {
        type: FILTER_ACTION,
        filter
    }
}