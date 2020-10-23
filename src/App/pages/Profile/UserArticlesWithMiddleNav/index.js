import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
// import Profile from '..';
// import './style.scss';
import Style from './style.module.scss';
import One from '../userArticles/One';
import Two from '../userArticles/Two';
import Three from '../userArticles/Three';
import Four from '../userArticles/Four';

export default class index extends Component {
  componentDidMount() {
    // console.log('rednder UserArticlesWithMiddleNav 1');
  }
  render() {
    const { username } = this.props;
    // console.log('rednder midilleNav 2 ' + username);
    return (
      <>
        <div className={Style.container}>
          <div>
            <ul>
              <li>
                <NavLink
                  activeClassName={Style.selected}
                  className={Style.link}
                  exact
                  to={`/${username}`}
                >
                  Articles
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={Style.selected}
                  className={Style.link}
                  to={`/${username}/likes`}
                >
                  Likes
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={Style.selected}
                  className={Style.link}
                  to={`/${username}/dislikes`}
                >
                  Dislikes
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName={Style.selected}
                  className={Style.link}
                  to={`/${username}/saves`}
                >
                  Saved
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='articles-holder'>
          <Switch>
            <Route exact path={`/${username}`}>
              <h3>Please select a topic 1.</h3>
              <One username={username} />
            </Route>
            <Route path={`/${username}/likes`}>
              <h3>Please select a topic 2.</h3>
              <Two username={username} />
            </Route>
            <Route path={`/${username}/dislikes`}>
              <h3>Please select a topic 3.</h3>
              <Three username={username} />
            </Route>
            <Route path={`/${username}/saves`}>
              <h3>Please select a topic 4.</h3>
              <Four username={username} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}
