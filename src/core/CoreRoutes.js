import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '../common/PrivateRoute';
import DashboardView from '../dashboard/DashboardView';

export const routes = [{ name: 'Dashboard', path: '/' }];

const CoreRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/'>
        <DashboardView />
      </PrivateRoute>
    </Switch>
  );
};

export default CoreRoutes;
