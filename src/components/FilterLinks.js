import React, { Component } from 'react';
//import {connect} from 'react-redux';
import FilterLink from './FilterLink';
import {FILTERS} from '../actions/FilterVisibilityAction';

class FilterLinks extends Component {
  render() {
    return (
      <div>
          Show:{' '}
          <FilterLink filter={FILTERS.SHOW_ALL}>All</FilterLink>{' '}
          <FilterLink filter={FILTERS.ACTIVATE}>Activate</FilterLink>{' '}
          <FilterLink filter={FILTERS.COMPLETED}>Completed</FilterLink>
      </div>
    );
  }
}

export default FilterLinks;
