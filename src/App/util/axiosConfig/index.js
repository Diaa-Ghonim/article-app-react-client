import _axios from 'axios';
import { Cookie } from '../../libs/cookie';
import { store } from '../../store';
import { authActionsType } from '../../features/auth';
const { AUTHENTICATE_MAIN_USER } = authActionsType


const axios = _axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    proxy: process.env.REACT_APP_API_URL,
    // withCredentials: true,
})
axios.interceptors.request.use(config => {
    // console.log(config);
    let token = Cookie.get('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;

    } else {
        config.headers.Authorization = null;

    }
    return config;
}, error => Promise.reject(error));


// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        store.dispatch({
            type: AUTHENTICATE_MAIN_USER.FAILURE,
            payload: { error },
        });
    }
    return Promise.reject(error);
});

export default axios;







// axios.defaults.baseURL = 'http://localhost:5000';

// export const addAuthorizationHeader = (token) => {
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

//     } else {
//         axios.defaults.headers.common['Authorization'] = null;

//     }
// }
/**
 * You can specify config defaults that will be applied to every request.

  Global axios defaults

  axios.defaults.baseURL = 'https://api.example.com';
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  For more specific info, please visit their docs.

  UPDATE:

  You can do it in two ways:

  1. In your index.js file [meaning the top-level aka 'root' file] you can configure your request/ response methods. Something like this:

      import React from 'react';
      import ReactDOM from 'react-dom';
      import './index.css';
      import App from './App';
      import registerServiceWorker from './registerServiceWorker';
      import axios from 'axios';

      axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
      axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
      axios.defaults.headers.post['Content-Type'] = 'application/json';

      axios.interceptors.request.use(request => {
          console.log(request);
          // Edit request config
          return request;
      }, error => {
          console.log(error);
          return Promise.reject(error);
      });

      axios.interceptors.response.use(response => {
          console.log(response);
          // Edit response config
          return response;
      }, error => {
          console.log(error);
          return Promise.reject(error);
      });

      ReactDOM.render( <App />, document.getElementById( 'root' ) );
      registerServiceWorker();
  2. Or you can create a new file, a new instance of your axios.js file to be precise and import the configurations separately in your components where you might need them. You could name it, eg axiosConfig.js and put your specific configs inside of it. Something like this:

  axiosConfig.js

  // First we need to import axios.js
  import axios from 'axios';
  // Next we make an 'instance' of it
  const instance = axios.create({
  // .. where we make our configurations
      baseURL: 'https://api.example.com'
  });

  // Where you would set stuff like your 'Authorization' header, etc ...
  instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

  // Also add/ configure interceptors && all the other cool stuff

  instance.interceptors.request...

  export default instance;
  After that you would import this file to components that need it and use it instead of the previous Axios [node_modules] import, like this:

  Example.js

  import React, { Component } from 'react';
  // import axios from 'axios'; We don't need this anymore
  import axiosConfig from '../../axios'; // But instead our new configured version :)

  class Example extends Component {
      state = {
          data: [],
          error: false
      }

      componentDidMount () {
          // We could name (import) it as axios instead, but this makes more sense here ...
          axiosConfig.get('/posts' )
              .then(response => {
                    this.setState({data: response});
                  });
              })
              .catch(error => {
                  this.setState({error: true});
              });
      }
  NOTE: You can combine these two methods as needed, but remember that the configurations made in your configAxios.js file will overwrite those made in your index.js file [if they are the same configurations, that is :) ]


 */