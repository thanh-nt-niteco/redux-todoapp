import React, { Component } from 'react';
import FilterLink from './FilterLink';
import {FILTERS} from '../actions/FilterVisibilityAction';

class Footer extends Component {
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

export default Footer;
