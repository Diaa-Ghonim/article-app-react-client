import {
  updateObject,
  updateItemInArray,
  filterArrayById,
} from '../../../util/reducerUtilities';

/**-------------------- filter array helper ----------------------------- */

/**-------------------- state one article -------------------------------------- */

export const setFetchedArticle = (article) => {
  article.dateOfCreate = new Date(article.dateOfCreate).toDateString();
  return { ...article };
};

export const deleteArticle = (article) => {
  return null;
};

export const addLikeToArticle = (article, user) => {
  if (!article) return;
  const dislikesFilterd = filterArrayById(article.dislikes, user.id);
  const likes = [user, ...article.likes];
  /** you can use dislikesFilter without spread operator this additional step */
  const dislikes = [...dislikesFilterd];
  return {
    ...article,
    likes,
    dislikes,
  }; /** this pure or  return input article but not pure */
};

export const removelikefromArticle = (article, user) => {
  if (!article) return;
  const likesFilterd = filterArrayById(article.likes, user.id);
  const likes = [...likesFilterd];
  return { ...article, likes };
};

export const addDislikeToArticle = (article, user) => {
  if (!article) return;
  const likesFilterd = filterArrayById(article.likes, user.id);
  const likes = [...likesFilterd];
  const dislikes = [user, ...article.dislikes];
  return { ...article, likes, dislikes }; /** pure function */
};

export const removeDislikeFromArticle = (article, user) => {
  if (!article) return;
  const dislikesFilterd = filterArrayById(article.dislikes, user.id);
  const dislikes = [...dislikesFilterd];
  return { ...article, dislikes };
};

export const addSaveToArticle = (article, user) => {
  if (!article) return;
  const saves = [user, ...article.saves];
  return { ...article, saves };
};

export const removeSaveFromArticle = (article, user) => {
  if (!article) return;
  const savesFilterd = filterArrayById(article.saves, user.id);
  const saves = [...savesFilterd];
  return { ...article, saves }; /**pure function */
};

/**-------------------------set fetched Articles -------------------------------- */

export const setFetchedArticles = (state, articles) => {
  const articlesMapped = articles.map((article) => {
    article.dateOfCreate = new Date(article.dateOfCreate).toDateString();
    return article;
  });
  return updateObject(state, {
    articles: articlesMapped.reverse(),
    isLoading: false,
    isFetched: true,
    error: null,
  });
};

/**-------------------------add delete article to array -------------------------- */

export const addArticleToArray = (state, article) => {
  article.dateOfCreate = new Date(article.dateOfCreate).toDateString();
  const updatedArticles = [article, ...state.articles];
  return updateObject(state, { articles: updatedArticles });
};

export const deleteArticleFromArray = (state, articleId) => {
  const updatedArticles = filterArrayById(state.articles, articleId);
  return updateObject(state, { articles: updatedArticles });
};

/**---------------------------- update articles arrays -------------------------- */

export const addLikeToArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(
    state.articles,
    articleId,
    (article) => {
      return addLikeToArticle(article, user);
    }
  );
  return updateObject(state, { articles: updatedArticles });
};

export const removeLikeFromArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(
    state.articles,
    articleId,
    (article) => {
      return removelikefromArticle(article, user);
    }
  );
  return updateObject(state, { articles: updatedArticles });
};

/**-------------------------dislike actions ---------------------------------------- */

export const addDislikeToArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(
    state.articles,
    articleId,
    (article) => {
      return addDislikeToArticle(article, user);
    }
  );
  return updateObject(state, { articles: updatedArticles });
};

export const removeDislikeFromArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(
    state.articles,
    articleId,
    (article) => {
      return removeDislikeFromArticle(article, user);
    }
  );
  return updateObject(state, { articles: updatedArticles });
};

/**-------------------------save actions ------------------------------------- */

export const addSaveToArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(
    state.articles,
    articleId,
    (article) => {
      return addSaveToArticle(article, user);
    }
  );
  return updateObject(state, { articles: updatedArticles });
};

export const removeSaveFromArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(
    state.articles,
    articleId,
    (article) => {
      return removeSaveFromArticle(article, user);
    }
  );
  return updateObject(state, { articles: updatedArticles });
};

// export const handleArticleInterActionsState = (state, action) => {
//   switch (action.type) {
//     case articleActionTypes.DELETE_ARTICLE_SUCCESS:
//       return deleteArticleFromArray(state, action.payload);

//     case articleActionTypes.LIKE_ARTICLE_SUCCESS:
//       return addLikeToArticleInArray(state, action.articleId, action.payload);

//     case articleActionTypes.REMOVE_LIKE_ARTICLE_SUCCESS:
//       return removeLikeFromArticleInArray(state, action.articleId, action.payload);

//     case articleActionTypes.DISLIKE_ARTICLE_SUCCESS:
//       return addDislikeToArticleInArray(state, action.articleId, action.payload);

//     case articleActionTypes.REMOVE_DISLIKE_ARTICLE_SUCCESS:
//       return removeDislikeFromArticleInArray(state, action.articleId, action.payload);

//     case articleActionTypes.SAVE_ARTICLE_SUCCESS:
//       return addSaveToArticleInArray(state, action.articleId, action.payload);

//     case articleActionTypes.REMOVE_SAVE_ARTICLE_SUCCESS:
//       return removeSaveFromArticleInArray(state, action.articleId, action.payload);

//     default:
//       return state;
//   }
// }
