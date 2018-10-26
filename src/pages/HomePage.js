import React, { Component } from 'react';

import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';
import Footer from '../components/Footer';
import {FILTERS} from '../actions/FilterVisibilityAction';

class HomePage extends Component {
  render() {
    const {match} = this.props;

    return (
        <div>
            <AddToDo />
            <ToDoList filter={match.params.filter || FILTERS.SHOW_ALL} />
            <Footer />
        </div>
    );
  }
}

export default HomePage;
