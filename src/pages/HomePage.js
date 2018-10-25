import React, { Component } from 'react';

import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';
import FilterLinks from '../components/FilterLinks';

class HomePage extends Component {
  render() {
    return (
        <div>
            <AddToDo />
            <ToDoList />
            <FilterLinks />
        </div>
    );
  }
}

export default HomePage;
