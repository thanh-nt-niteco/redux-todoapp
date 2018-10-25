import React, { Component } from 'react';

import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import FilterLinks from './components/FilterLinks';

import {Provider} from 'react-redux';
import createStore from './createStore';

class App extends Component {
  render() {
    return (
        <Provider store={createStore()}>
          <div>
            <AddToDo />
            <ToDoList />
            <FilterLinks />
          </div>
        </Provider>
    );
  }
}

export default App;
