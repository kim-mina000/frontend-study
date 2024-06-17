import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {Routes, Route} from 'react-router-dom';
import {Provider} from "react-redux";

import Layout from "./components/Layout.jsx";
import TodoList from './components/TodoList.jsx';
import { store } from './app/store.js';
import Animation from './components/Animation.jsx';

const GlobalStyled = createGlobalStyle`

  /** 몽글몽글 강아지폰트 */ 
  @font-face {
    font-family: 'Cafe24Meongi-B-v1.0';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-3@1.1/Cafe24Meongi-B-v1.0.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  /* 몽글몽글 강아지폰트 화이트 */
  @font-face {
    font-family: 'Cafe24Meongi-W-v1.0';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405-3@1.1/Cafe24Meongi-W-v1.0.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  /* *동글동글 폰트 */
  @font-face {
    font-family: 'Dongle-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108_2@1.0/Dongle-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  *{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    user-select: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled/>
      <Routes>
        <Route path='/' element={<Animation />} />
        <Route path='/main' element={<Layout />}>
          <Route index element={<TodoList />}/>
        </Route>

      </Routes>
    </Provider>
  );
}

export default App;
