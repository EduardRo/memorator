import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage';
import TestsPage from './pages/testspage/testsPage';
import Test from './components/tests/tests.component';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />

            <Route exact path='/tests' component={TestsPage} />
            <Route path='/tests/test/:id' component={Test} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
