import './App.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Routes from './routes';
import { ModalProvider } from './shared/Modal/ModalProvider';
import './util/axiosConfig';
console.log(process.env.REACT_APP_API_URL, 'dhdh');
console.log(process.env);
console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV);
console.log(process.env.PUBLIC_URL);

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
