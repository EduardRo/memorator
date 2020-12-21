import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage.jsx';

import './App.css';
const Tests = () => {
  return <div>Tests</div>;
};

const HatsPage = () => {
  return <div>hats page</div>;
};
const JacketsPage = () => <div>Jackets Page</div>;
const SneakersPage = () => <div>Sneakers Page</div>;

const WomenPage = () => <div>Women Page</div>;
const MenPage = () => <div>Men Page</div>;

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
            <Route exact path='/tests' component={Tests} />

            <Route exact path='/hats' component={HatsPage} />
            <Route exact path='/jackets' component={JacketsPage} />
            <Route exact path='/sneakers' component={SneakersPage} />
            <Route exact path='/women' component={WomenPage} />
            <Route exact path='/men' component={MenPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
