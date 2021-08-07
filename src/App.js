import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './common/PrivateRoute';
import CoreLayout from './core/CoreLayout';
import CoreRoutes from './core/CoreRoutes';
import LoginView from './auth/LoginView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signin'>
          <LoginView />
        </Route>
        <PrivateRoute path='/'>
          <CoreLayout>
            <CoreRoutes />
          </CoreLayout>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
