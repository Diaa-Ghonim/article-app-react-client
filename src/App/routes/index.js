import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/Profile';
import CreateArticlePage from '../pages/CreateArticle';
import OneArticlePage from '../pages/OneArticle';
import TopReadingPage from '../pages/TopReading';
import BestWritersPage from '../pages/BestWriters';
import NotFoundPage from '../pages/NotFound';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


export default function index() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
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

            <Route
              exact
              path='/create-article'
              component={CreateArticlePage}
            ></Route>
            <Route exact path='/top-reading' component={TopReadingPage}></Route>
            <Route
              exact
              path='/best-writers'
              component={BestWritersPage}
            ></Route>
            <Route exact path='/signin' >
              <SignIn render={data => (
                <h1>Hello {data.target}</h1>
              )}/>
            </Route>

            <Route exact path='/signup' >
              <SignUp />
            </Route>
            <Route
              exact
              path='/:username'
              secondParam=''
              component={ProfilePage}
            ></Route>
            <Route
              exact
              path='/:username/likes'
              secondParam='likes'
              render={(props) => <ProfilePage {...props} secondParam='likes' />}
            ></Route>
            <Route
              exact
              path='/:username/dislikes'
              secondParam='dislikes'
              component={ProfilePage}
            ></Route>
            <Route
              exact
              path='/:username/saves'
              secondParam='saves'
              component={ProfilePage}
            ></Route>
            <Route
              exact
              path='/:username/:articleID'
              component={OneArticlePage}
            ></Route>
            <Route path='*' exact={true} component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

