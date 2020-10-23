import React from 'react';
import './App.scss';
// import { AppContainer } from './style';
import Routes from './routes';
import axios from 'axios';
import { Provider} from 'react-redux';
import { store } from './store';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdlMzJhMDMxYjdjMDJmYTBmNDNhMzciLCJfbmFtZSI6InRvYWEiLCJfdXNlcm5hbWUiOiJ0b2FhIiwiX2VtYWlsIjoic29yYUBnbWFpbC5jb20iLCJfcGFzc3dvcmQiOiIkMmIkMTAkV2hjUVQ2SS9CdjdXSy42SVhwbzBpZXNRbS8vandqdS85NW1RUzNBbDF1NHU0bWhSTEhjbVMiLCJfcHJvZkltYWdlIjoiZGVmYXVsdC1pbWFnZS5wbmciLCJfcmF0ZSI6MTIsImlhdCI6MTYwMjEwNjAxNiwiZXhwIjoxNjA1NzA2MDE2fQ.XBAPl8_LYbcE1KTs7AFVB1OdYyUOKggd_ZQLxFHnLHY';

  
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}


