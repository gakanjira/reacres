import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Twitters from 'views/Twitters/Twitters';
import Notes from 'views/Notes/Notes';
import Articles from 'views/Articles/Articles';
import MainTemplate from 'templates/MainTemplate';
import CardDetailsPage from 'views/CardDetailsPage/CardDetailsPage';
import { routes } from 'routes';

const App = () => (
  <Provider store={store}>
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={CardDetailsPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={CardDetailsPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={CardDetailsPage} />
        </Switch>
      </MainTemplate>
    </Router>
  </Provider>
);

export default App;
