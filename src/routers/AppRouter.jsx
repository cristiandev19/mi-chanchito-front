import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import AuthContext from '../contexts/auth.context';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  console.log('router');
  const { user } = useContext(AuthContext);
  console.log('user', user);
  return (
    <>
      <Router>
        <div>
          <Switch>
            <PublicRoute
              path="/auth"
              isAuthenticated={!!user.token}
              component={AuthPage}
            />
            <PrivateRoute
              path="/dashboard"
              isAuthenticated={!!user.token}
              component={DashboardRouter}
            />
            <PublicRoute
              path="/"
              isAuthenticated={!!user.token}
              component={HomePage}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
