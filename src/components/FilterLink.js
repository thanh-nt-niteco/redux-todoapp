//import { connect } from 'react-redux';
//import Link from './Link';
//import {FilterVisibility} from '../actions/FilterVisibilityAction';

// export default connect((state, ownProps) => {
//   return {
//       active: state.filter === ownProps.filter
//   };
// }, {
//   onClick: FilterVisibility
// })(FilterLink);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FilerLink extends Component {
  render() {
    const {filter, children} = this.props;

    return (
      <Link 
        to={filter === 'all' ? '' : filter}
      >
        {children}
      </Link>
    );
  }
}

