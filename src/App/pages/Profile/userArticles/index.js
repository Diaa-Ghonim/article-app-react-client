// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import {
//   getUserArticles,
//   getUserArticlesLiked,
//   getUserArticlesDisliked,
//   getUserArticlesSaved,
// } from '../../../components/UserArticles/actions';
// import Loading from '../../../shared/Loading';
// import TryLoadingAgain from '../../../shared/TryLoadingAgain';

// import ListOfArticles from '../../../components/Article/articleComponents/ListOfArticles';
// import { useLocation } from 'react-router-dom';

// export class index extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       type: '',
//     };
//     // this.location = useLocation();
//   }

//   componentDidMount() {
    
//   }

//   componentDidUpdate() {
//     const {
//       getUserArticles,
//       getUserArticlesLiked,
//       getUserArticlesDisliked,
//       getUserArticlesSaved,
//       path,
//     } = this.props;

//     const [, username, secondRoute] = path.split('/');
//     switch (secondRoute) {
//       case '' || undefined:
//         console.log('/');
//         getUserArticles(username);
//         break;
//       case 'likes':
//         console.log('likes');

//         getUserArticlesLiked(username);
//         break;
//       case 'dislikes':
//         console.log('dislikes');

//         getUserArticlesDisliked(username);
//         break;
//       case 'saves':
//         console.log('saves');

//         getUserArticlesSaved(username);
//         break;
//       default:
//         break;
//     }

//   }
//   render() {
//     console.log(this.props, 'from userArticles');
//     const {
//       userArticles,
//       userArticlesLiked,
//       userArticlesDisliked,
//       userArticlesSaved,
//       isLoading,
//       error,
//       typeOfState,
//     } = this.props;
//     return (
//       <div>
//         {isLoading ? (
//           <Loading />
//         ) : error.isError ? (
//           <div>{error.msg}</div>
//         ) : (
//           <div>
//             {typeOfState === '' ? <ListOfArticles articles={userArticles} /> : typeOfState === 'liked' ? <ListOfArticles articles={userArticlesLiked} /> : typeOfState === 'disliked' ? <ListOfArticles articles={userArticlesDisliked} /> : typeOfState === 'saved' ? <ListOfArticles articles={userArticlesSaved}/>:''}
//               </div>
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   userArticles: state.userArticles.userArticles,
//   userArticlesLiked: state.userArticles.userArticlesLiked,
//   userArticlesDisliked: state.userArticles.userArticlesDisliked,
//   userArticlesSaved: state.userArticles.userArticlesSaved,
//   isLoading: state.userArticles.isLoading,
//   error: state.userArticles.error,
//   typeOfState: state.userArticles.typeOfState
// });

// const mapDispatchToProps = {
//   getUserArticles,
//   getUserArticlesLiked,
//   getUserArticlesDisliked,
//   getUserArticlesSaved,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(index);

// /***
//  * {typeOfState === '' ? <ListOfArticles articles={userArticles} /> : typeOfState === 'liked' ? <ListOfArticles articles={userArticlesLiked} /> : typeOfState === 'disliked' ? <ListOfArticles articles={userArticlesDisliked} /> : typeOfState === 'saved' ? <ListOfArticles articles={userArticlesSaved}/>}
//  */
