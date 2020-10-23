import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from '../Article';


export default class index extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <div>
          {this.props.articles.map((article) => {
            return <Article key={article._id} data={article} />;
          })}
        </div>
      </div>
    );
  }
}
