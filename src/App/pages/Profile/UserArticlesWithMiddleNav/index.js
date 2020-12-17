import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Style from './style.module.scss';
import { UserArticles } from '../../../features/article/userArticles';
import { UserLikedArticles } from '../../../features/article/userLikedArticles';
import { UserDislikedArticles } from '../../../features/article/userDislikedArticles';
import { UserSavedArticles } from '../../../features/article/userSavedArticles';


export default class index extends Component {

  render() {
    const { username } = this.props;
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
              <UserArticles username={username} />
            </Route>
            <Route path={`/${username}/likes`}>
              <UserLikedArticles username={username} />
            </Route>
            <Route path={`/${username}/dislikes`}>
              {/* <h3>Please select a topic 3.</h3> */}
              <UserDislikedArticles username={username} />
            </Route>
            <Route path={`/${username}/saves`}>
              {/* <h3>Please select a topic 4.</h3> */}
              <UserSavedArticles username={username} />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}
