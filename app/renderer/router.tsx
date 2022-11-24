import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Tomato from '@src/container/tomamo';
import ROUTER from '@common/constants/router';

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.app} exact>
          <Tomato />
        </Route>
      </Switch>
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;
