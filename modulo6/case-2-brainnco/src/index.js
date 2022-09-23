import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'IBM Plex Sans', sans-serif;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>
);
