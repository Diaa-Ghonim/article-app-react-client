import React, { Component } from 'react'
import './style.scss';
import { connect } from 'react-redux'
import { likeArticle, removeLikeArticle } from '../../../../actions';
// import {}
export class SvgLike extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       liked: false
    }
    this.handleLikeArticle = this.handleLikeArticle.bind(this);
    this.isUserLikedArticle = this.isUserLikedArticle.bind(this);
  }
  
  componentDidMount() {
    // console.log(this.props.data, 'gh');
    if (this.isUserLikedArticle()) {
      this.setState((state, props) => {
        return {liked : true}
      })
    }
    
  }

  isUserLikedArticle(){
    if (this.props.data.likes.find(user => user._id === '5f7e32a031b7c02fa0f43a37')) {
      return true
    }
    return false;
  }


  handleLikeArticle() {
    if (!this.isUserLikedArticle()) {
      this.props.likeArticle(this.props.data.id);
    } else {
      this.props.removeLikeArticle(this.props.data.id)
    }
  }
  
  render() {
    let r = false
    if (this.props.data.likes.find(user => user._id === '5f7e32a031b7c02fa0f43a37')) {
      r = true
    }
    const { test } = this.props.data;
    // console.log(test);
     return (
       <div className='svg-holder'>
         <div>{test? test : ''}</div>
         <div>
           
           <svg
             onClick={this.handleLikeArticle}
             className={r? 'svg-fill' : ''}
             viewBox='0 0 24 24'
             preserveAspectRatio='xMidYMid meet'
             focusable='false'
           >
             <g>
               <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'></path>
             </g>
           </svg>
         </div>
       </div>
     );
    
    
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  likeArticle,
  removeLikeArticle
}

export default connect(mapStateToProps, mapDispatchToProps)(SvgLike)

/**
 * if (this.state.liked) {
     
    } else {
      return (
        <div className='svg-holder'>
          <div>
            <svg
              onClick={this.toggle}
              id='like-btn'
              viewBox='0 0 24 24'
              preserveAspectRatio='xMidYMid meet'
              focusable='false'
            >
              <g>
                <path d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'></path>
              </g>
            </svg>
          </div>
        </div>
      );
    }
 */