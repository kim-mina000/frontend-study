import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoTemplate from './components/TodoTemplate';
import { createGlobalStyle, styled } from "styled-components";
import reset,{ Reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
${console.log(reset)}
  /* reset css를 넣고 싶다? */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
