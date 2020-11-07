import './App.scss';
import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import Routes from './routes';
import Cookie from './cookie';
import { ModalProvider } from './shared/Modal/ModalProvider';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['Authorization'] = Cookie.get('token');

export default function App() {
  return (
    <BrowserRouter>
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
