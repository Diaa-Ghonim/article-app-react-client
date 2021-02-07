import './App.scss';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './routes';
import { ModalProvider } from './shared/Modal/ModalProvider';
import './util/axiosConfig';

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ModalProvider>
          <div className='App'>
            <Routes />
          </div>
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  );
}
