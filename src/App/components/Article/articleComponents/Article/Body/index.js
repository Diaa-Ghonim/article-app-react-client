import React, { Component } from 'react';
import './style.scss';
import ReactHtmlParser from 'react-html-parser';

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowmore: false,
      isHeightBigger: false,
    };

    this.ele = React.createRef();
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state, props) => {
      return { isShowmore: !state.isShowmore };
    });
  }

  componentDidMount() {
    /**
     * here i will get css property height after component rendered
     * and check if bigger than or equal 200 px
     * show read more by add state to handle this read more link
     */
    // console.log(this.state);
    // console.log(this.ele.current.clientHeight);
    const { current } = this.ele;
    if (current && current.clientHeight >= 200) {
      console.log('true');
      this.setState((state, props) => {
        return { isHeightBigger: true };
      });
    } else {
      this.setState((state, props) => {
        return { isHeightBigger: false };
      });
    }
  }
  
  render() {
    return (
      <>
        <div className='article-content' >
          <div className='article-text-wrapper'>
            <div
              className='article-text'
              data-with-readmore={this.state.isShowmore}
              ref={this.ele}
            >
              
                {ReactHtmlParser(this.props.data.content)}              
            </div>
            {this.state.isHeightBigger ? (
              <div className='read-article'>
                <span
         
                  className='lessmore'
                  onClick={this.toggle}
                >
                  {this.state.isShowmore ? 'less more' : 'show more'}
                </span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </>
    );
  }
}
