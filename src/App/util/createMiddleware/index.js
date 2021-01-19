// const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
// const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
// const LOAD_POSTS_START = 'LOAD_POSTS_START';

/**
 * there is tema of another approach
 */

// const loadPosts2 = (userId) => {
//   return {
//     types: [LOAD_POSTS_START, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE],
//     shouldCallApi: state => !state.posts[userId],
//     callApi: () => fetch('url'),
//     payload: { userId }
//   }
// }

/**
 * this is my middleware
 */

export function callAPIMiddleware({ dispatch, getState }) {
  return (next) => (action) => {
    const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;
    // console.log(action);
    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every((type) => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    const [requestType, successType, failureType] = types;

    dispatch(
      Object.assign(
        {},
        {
          type: requestType,
        }
      )
    );

    return callAPI().then(
      ({ data }) =>
        dispatch(
          Object.assign(
            {},
            {
              payload: { data },
              type: successType,
            }
          )
        ),
      (error) =>
        dispatch(
          Object.assign(
            {},
            {
              payload: { error },
              type: failureType,
            }
          )
        )
    );
  };
}

/**
 * this is thunk
 */

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
