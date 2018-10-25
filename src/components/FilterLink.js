import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FilterVisibility} from '../actions/FilterVisibilityAction';


class FilterLink extends Component {
  render() {
    const {active, filter, dispatch} = this.props;
    if(active) {
        return (<span>{this.props.children}</span>);
    }

    return (
      <a href="#" onClick={(event)=> {event.preventDefault(); dispatch(FilterVisibility(filter))}}>
        {this.props.children}
      </a>
    );
  }
}

export default connect((state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    };
})(FilterLink);
