import React, { useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../shared/Navbar';
import Spinner from '../shared/Spinner';
import { authenticateMainUser } from '../features/auth';
import {
  Home,
  Profile,
  BestWriters,
  TopReading,
  CreateArticle,
  NotFound,
  ShowArticle,
  SignIn,
  SignUp,
  Search,
  EditUserInfo
} from '../pages';

export default () => {
  const dispatch = useDispatch();
  /**
   * use memo call during render method
   * also you can declare useRef with true value and check on it 
   * if true dispatch action and change useRef value to false 
   * to prevent dispatch again
   */
  document.addEventListener('DOMContentLoaded', (evt) => {
    console.log(evt);
  })

  let booleanRef = useRef(true); /** to dispatch authenticate user */
  if (booleanRef.current) {
    dispatch(authenticateMainUser());
    booleanRef.current = false;
  }

  const { isAuthenticate, isLoading } = useSelector(({ mainUser }) => (mainUser));

  return (
    <>
      {
        isLoading
          ? <Spinner />
          : <>
            <Navbar />
            <Switch>
              <Redirect
                exact
                from='/'
                to='/home'
              />
              <Route
                exact
                strict
                path='/home'
                component={Home}
              />

              <PrivateRoute
                exact
                path='/create-article'
                isAuthenticate={isAuthenticate}
                component={CreateArticle}
              />
              {/* <PrivateRoute
                exact
                path={/\/search\?q=.?/}
                // path='/search='
                render={() => {
                  console.log('hello rednder')
                }}
                isAuthenticate={isAuthenticate}
                component={Search}
              /> */}
              <PrivateRoute
                exact
                path='/top-reading'
                isAuthenticate={isAuthenticate}
                component={TopReading}
              />
              <PrivateRoute
                exact
                path='/best-writers'
                isAuthenticate={isAuthenticate}
                component={BestWriters}
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
                path='/:username/edit-user'
                isAuthenticate={isAuthenticate}
                component={EditUserInfo}
              />
              <PrivateRoute
                exact
                strict
                path='/:username'
                secondParam=''
                isAuthenticate={isAuthenticate}
                component={Profile}
              />
              <PrivateRoute
                exact
                path='/:username/likes'
                isAuthenticate={isAuthenticate}
                component={Profile}
              />
              <PrivateRoute
                exact
                path='/:username/dislikes'
                secondParam='dislikes'
                isAuthenticate={isAuthenticate}
                component={Profile}
              />
              <PrivateRoute
                exact
                path='/:username/saves'
                isAuthenticate={isAuthenticate}
                component={Profile}
              />
              <PrivateRoute
                exact
                path='/:username/:articleID'
                isAuthenticate={isAuthenticate}
                component={ShowArticle}
              />
              <PrivateRoute
                path='*'
                exact
                isAuthenticate={isAuthenticate}
                component={NotFound}
              />
            </Switch>
          </>
      }
    </>
  );
}

/** handle all site routes */
const PrivateRoute = ({ component: Component, isAuthenticate, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => { /**props is object from history, location, match, static context*/
        console.log(props);
        return isAuthenticate === true
          ? /\/search\?q=.?/.test(props.location.pathname + props.location.search)
            ? <Search {...props} />
            : <Component {...props} />
          : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      }}
    />
  )
}

/** handle sign in and sign up routes */
const PrivateRouteAuth = ({ component: Component, isAuthenticate, ...rest }) => {

  return (
    <Route {...rest} render={(props) => {
      return !isAuthenticate
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }} />
  )
}

