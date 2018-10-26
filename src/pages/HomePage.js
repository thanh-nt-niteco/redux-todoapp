import React, { Component } from 'react';

import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';
import Footer from '../components/Footer';

class HomePage extends Component {
  render() {
    return (
        <div>
            <AddToDo />
            <ToDoList />
            <Footer />
        </div>
    );
  }
}

export default HomePage;
