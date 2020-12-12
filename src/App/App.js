import './App.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './routes';
import { ModalProvider } from './shared/Modal/ModalProvider';
import './util/axiosConfig';
import axios from './util/axiosConfig';
console.log(process.env.REACT_APP_API_URL);
console.log(process.env);
axios.get('https://article-app-server.herokuapp.com').then(console.log)
fetch('https://article-app-server.herokuapp.com').then(res => res.text()).then(console.log)
export default function App() {
  return (
    <BrowserRouter >
      <Provider store={store}>
        <ModalProvider>
          <div className='App'>
            <Routes />
          </div>
        </ModalProvider >
      </Provider>
    </BrowserRouter>
  );
}
