import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataProvider from './redux/store'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals( ))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
