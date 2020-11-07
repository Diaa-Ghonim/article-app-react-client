import { updateObject, updateItemInArray, filterArrayById } from '../reducerUtilities';
import Article from '../../classes/Article';
import User from '../../classes/User';
import { articleActionTypes } from '../../shared/Article';
/**-------------------- filter array helper ----------------------------- */



/**-------------------- state one article -------------------------------------- */

export const setFetchedArticle = (article) => {
  return new Article(article);
};

export const deleteArticle = (article) => {
  return {}
};

export const addLikeToArticle = (article, user) => {

  const dislikesFilterd = filterArrayById(article.dislikes, user._id);
  article.likes = [user, ...article.likes]
  article.dislikes = [...dislikesFilterd]

  return article
}

export const removelikefromArticle = (article, user) => {
  const likesFilterd = filterArrayById(article.likes, user._id);
  console.log(likesFilterd, 'ren');
  article.likes = [...likesFilterd]

  return article;

}

export const addDislikeToArticle = (article, user) => {
  const likesFilterd = filterArrayById(article.likes, user._id);
  article.likes = [...likesFilterd];
  article.dislikes = [user, ...article.dislikes];

  return article;
}

export const removeDislikeFromArticle = (article, user) => {
  const dislikesFilterd = filterArrayById(article.dislikes, user._id);
  article.dislikes = [...dislikesFilterd];

  return article;
};

export const addSaveToArticle = (article, user) => {

  article.saves = [user, ...article.saves];

  return article;
};

export const removeSaveFromArticle = (article, user) => {
  const savesFilterd = filterArrayById(article.saves, user._id);
  article.saves = [...savesFilterd];

  return article;
}






/**-------------------------set fetched Articles -------------------------------- */

export const setFetchedArticles = (state, articles) => {
  const articlesMapped = articles.map(article => {
    return new Article(article);
  });
  return updateObject(state, {
    articles: articlesMapped.reverse(),
    isLoading: false,
    isFetched: true,
    error: { isError: false, msg: '' }
  });
}

/**-------------------------add delete article to array -------------------------- */

export const addArticleToArray = (state, article) => {
  const articleInstance = new Article(article);
  const updatedArticles = [articleInstance, ...state.articles];
  return updateObject(state, { articles: updatedArticles });
};

export const deleteArticleFromArray = (state, articleId) => {
  const updatedArticles = filterArrayById(state.articles, articleId);
  return updateObject(state, { articles: updatedArticles });
}



/**---------------------------- update articles arrays -------------------------- */


export const addLikeToArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(state.articles, articleId, (article) => {
    return addLikeToArticle(article, user);
  });
  return updateObject(state, { articles: updatedArticles });
};

export const removeLikeFromArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(state.articles, articleId, (article) => {
    return removelikefromArticle(article, user);
  });
  return updateObject(state, { articles: updatedArticles });
};


/**-------------------------dislike actions ---------------------------------------- */

export const addDislikeToArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(state.articles, articleId, (article) => {
    return addDislikeToArticle(article, user);
  });
  return updateObject(state, { articles: updatedArticles });
};

export const removeDislikeFromArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(state.articles, articleId, (article) => {
    return removeDislikeFromArticle(article, user);
  });

  return updateObject(state, { articles: updatedArticles });
};


/**-------------------------save actions ------------------------------------- */

export const addSaveToArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(state.articles, articleId, (article) => {
    return addSaveToArticle(article, user);
  });
  return updateObject(state, { articles: updatedArticles });
};

export const removeSaveFromArticleInArray = (state, articleId, user) => {
  const updatedArticles = updateItemInArray(state.articles, articleId, (article) => {
    return removeSaveFromArticle(article, user);
  });
  return updateObject(state, { articles: updatedArticles });
};



export const handleArticleInterActionsState = (state, action) => {
  switch (action.type) {
    case articleActionTypes.DELETE_ARTICLE_SUCCESS:
      return deleteArticleFromArray(state, action.articleId);

    case articleActionTypes.LIKE_ARTICLE_SUCCESS:
      return addLikeToArticleInArray(state, action.articleId, action.payload);

    case articleActionTypes.REMOVE_LIKE_ARTICLE_SUCCESS:
      return removeLikeFromArticleInArray(state, action.articleId, action.payload);

    case articleActionTypes.DISLIKE_ARTICLE_SUCCESS:
      return addDislikeToArticleInArray(state, action.articleId, action.payload);

    case articleActionTypes.REMOVE_DISLIKE_ARTICLE_SUCCESS:
      return removeDislikeFromArticleInArray(state, action.articleId, action.payload);

    case articleActionTypes.SAVE_ARTICLE_SUCCESS:
      return addSaveToArticleInArray(state, action.articleId, action.payload);

    case articleActionTypes.REMOVE_SAVE_ARTICLE_SUCCESS:
      return removeSaveFromArticleInArray(state, action.articleId, action.payload);

    default:
      return state;
  }
}