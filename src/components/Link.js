import React, { Component } from 'react';

export default class FilterLink extends Component {
  render() {
    const {active, filter, onClick} = this.props;
    if(active) {
        return (<span>{this.props.children}</span>);
    }

    return (
      <a href="#" onClick={(event)=> {event.preventDefault(); onClick(filter)}}>
        {this.props.children}
      </a>
    );
  }
}