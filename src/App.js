import './app.scss';
import React, { Component } from 'react';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import RepoPage from './content/RepoPage';
import LandingPage from './content/LandingPage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
