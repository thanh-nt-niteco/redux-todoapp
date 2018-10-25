import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import createStore from './createStore';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
        <Provider store={createStore()}>
          <Router>
            <Route path="/" component={HomePage} />
          </Router>
        </Provider>
    );
  }
}

export default App;
