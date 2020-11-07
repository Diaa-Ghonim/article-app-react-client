import React, { useMemo } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../shared/Navbar';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/Profile';
import CreateArticlePage from '../pages/CreateArticle';
import OneArticlePage from '../pages/ShowArticle';
import TopReadingPage from '../pages/TopReading';
import BestWritersPage from '../pages/BestWriters';
import NotFoundPage from '../pages/NotFound';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Loading from '../shared/Loading';
import { authenticateMainUser } from '../features/auth';
import Cookie from '../cookie';

export default function Index() {
  const dispatch = useDispatch();
  /**
   * use memo call during render method
   * also you can declare useRef with true value and check on it 
   * if true dispatch action and change useRef value to false 
   * to prevent dispatch again
   */
  useMemo(() => dispatch(authenticateMainUser()), [])

  const mainUser = useSelector(state => state.mainUser)
  const { isAuthenticate, isLoading } = mainUser;

  return (
    <>
      {isLoading ? <Loading /> : <>
        <Navbar />

        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return <Redirect to='/home' />;
            }}
          />
          <Route exact path='/home' component={HomePage} />

          <PrivateRoute
            exact
            path='/create-article'
            isAuthenticate={isAuthenticate}
            component={CreateArticlePage}
          />
          <PrivateRoute
            exact
            path='/top-reading'
            isAuthenticate={isAuthenticate}
            component={TopReadingPage}
          />

          <PrivateRoute
            exact
            path='/best-writers'
            isAuthenticate={isAuthenticate}
            component={BestWritersPage}
          />
          <PrivateRouteAuth
            exact
            path='/signin'
            isAuthenticate={isAuthenticate}
            isLoading={isLoading}
            component={SignIn}
          />


          <PrivateRouteAuth
            exact
            path='/signup'
            isLoading={isLoading}
            isAuthenticate={isAuthenticate}
            component={SignUp}
          />


          <PrivateRoute
            exact
            path='/:username'
            secondParam=''
            isAuthenticate={isAuthenticate}
            component={ProfilePage}
          />
          <PrivateRoute
            exact
            path='/:username/likes'
            isAuthenticate={isAuthenticate}
            // render={(props) => <ProfilePage />}
            component={ProfilePage}
          />
          <PrivateRoute
            exact
            path='/:username/dislikes'
            secondParam='dislikes'
            isAuthenticate={isAuthenticate}
            component={ProfilePage}
          />
          <PrivateRoute
            exact
            path='/:username/saves'
            isAuthenticate={isAuthenticate}
            component={ProfilePage}
          />
          <PrivateRoute
            exact
            path='/:username/:articleID'
            isAuthenticate={isAuthenticate}
            component={OneArticlePage}
          />
          <PrivateRoute
            path='*'
            exact
            isAuthenticate={isAuthenticate}
            component={NotFoundPage}
          />
        </Switch>
      </>
      }
    </>
  );
}

const PrivateRoute = ({ component: Component, isAuthenticate, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticate === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
  )
}

const PrivateRouteAuth = ({ component: Component, isAuthenticate, ...rest }) => {

  if (!isAuthenticate) {
    return (
      <Route
        {...rest}
        component={Component} />
    )
  } else {
    return (
      <><Redirect to={{ pathname: '/' }} /></>
    )
  }
  // return (
  //   <Route
  //     {...rest}
  //     render={(props) => isAuthenticate === false
  //       ? <Component {...props} />
  //       : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
  //   />
  // )
}