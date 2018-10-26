import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createStore from './createStore';
import HomePage from './pages/HomePage';

import { fetchToDos } from './services/fetchData';
import { FILTERS } from './actions/FilterVisibilityAction';

fetchToDos(FILTERS.SHOW_ALL).then(todos => {
  console.log(todos);
});

class App extends Component {
  render() {
    return (
        <Provider store={createStore()}>
          <Router>
            <Route path='/:filter?' component={HomePage} />
          </Router>
        </Provider>
    );
  }
}

export default App;
